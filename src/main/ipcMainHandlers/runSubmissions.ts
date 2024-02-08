import { ipcMain } from 'electron'
import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec)

const runCommand = async (command: string, description: string) => {
    console.log(description)
    try {
        const { stdout, stderr } = await execPromise(command)
        if (stdout) console.log(`stdout: ${stdout}`)
        if (stderr) console.log(`stderr: ${stderr}`)
    } catch (error: any) {
        console.error(`Error during ${description}: ${error.message}`)
        throw error // Rethrow to break the execution flow
    }
}

/* example: 
    runDockerContainer('csgrader:python_3_12', 
        '/Users/kadeangell/Documents/csgradertest/submissions/allentyler_1632353_90498224_allen_tyler_assignment1.zip', 
        'allen_tyler_assignment1'); */
const runDockerContainer = async (
    imageName: string,
    submissionPath: string,
    submissionName: string
) => {
    try {
        // Run the docker container
        // Run in detached mode so that the next process can run
        await runCommand(
            `docker run -p 8001:80 --rm -d --name ${submissionName} ${imageName}`,
            `Running Docker container: ${submissionName}`
        )

        // Copy the submission to the docker container
        await runCommand(
            `docker cp "${submissionPath}" ${submissionName}:/submission/submission.zip`,
            `Copying submission to container: ${submissionName}`
        )

        // Unzip the submission
        await runCommand(
            `docker exec ${submissionName} unzip -o /submission/submission.zip -d /submission/`,
            `Unzipping submission in container: ${submissionName}`
        )

        // Move the unzipped submission to the correct location
        // The submission is unzipped to a folder it contains
        // It's hard to know what the name of that folder is
        // So, we move all the files in that folder to the root of the submission folder
        // Then, we delete the folder
        // This is done to make it easier to run the submission
        // If it were still in that directory and we tried to run it, even if we know the name of the directory,
        // We have to change the working directory of the docker exec command to that directory to make it run correctly.
        // We have to assume the student did not write the code so the server.py file can be run from anywhere on the OS
        // I implemented extra checks to make sure that if the student did not zip up a folder, the files are not moved
        // If the student zipped up a folder with a folder like __MACOSX or .vscode, those folders are ignored
        // Check for a .py file in /submission
        const checkPyFilesCommand = `docker exec ${submissionName} bash -c 'find /submission -maxdepth 1 -name "*.py"'`
        const { stdout: pyFilesStdout } = await execPromise(checkPyFilesCommand)
        if (!pyFilesStdout.trim()) {
            // No .py files found in the root of /submission, safe to move files
            await runCommand(
                `docker exec ${submissionName} bash -c 'shopt -s dotglob; find /submission/ -mindepth 1 -maxdepth 1 -type d | grep -vE "(__MACOSX|\\.vscode)" | while IFS= read -r dir; do mv "$dir"/* /submission/; rmdir "$dir"; done'`,
                `Moving files in container: ${submissionName}`
            )
        } else {
            console.log('Python file found in the root of /submission, skipping the move command.')
        }

        // Run the submission
        // The submission is assumed to have a file called server.py
        // I used `*erver.py` to account for any capitalization of the first letter
        // This is a very naive way to run the submission
        // Running the command detached so that the next process can run
        await runCommand(
            `docker exec -d ${submissionName} bash -c 'python3 /submission/*erver.py'`,
            `Executing submission in container: ${submissionName}`
        )
    } catch (error: any) {
        console.error(`Execution halted due to an error: ${error.message}`)
    }
}

const setupRunSubmissionsHandlers = () => {
    ipcMain.on(
        'run-submission',
        async (
            event: Electron.IpcMainEvent,
            language: string,
            submission_path: string,
            submission_name: string
        ) => {
            // check if docker is installed
            const isDockerInstalled = runCommand(
                'docker --version',
                'Checking if Docker is installed'
            )
                .then(() => true)
                .catch(() => false)

            if (!isDockerInstalled) {
                // TODO: send an error message to the renderer process
                event.sender.send('run-status', {
                    status: 'error',
                    message: 'Docker is not installed'
                })
                return
            }

            // check if the docker image exists
            let imageName = ''
            switch (language) {
                case 'python':
                    imageName = 'csgrader:python_3_12'
                    break
                default:
                    imageName = 'csgrader:python_3_12'
                    break
            }

            const dockerImageExists = runCommand(
                `docker image inspect ${imageName}`,
                `Checking if Docker image ${imageName} exists`
            )
                .then(() => true)
                .catch(() => false)

            if (!dockerImageExists) {
                // TODO: send an error message to the renderer process
                event.sender.send('run-status', {
                    status: 'error',
                    message: `Docker image ${imageName} does not exist`
                })
                return
            }

            runDockerContainer(imageName, submission_path, submission_name).then(() => {
                // If runDockerContainer succeeds, notify the renderer process
                event.sender.send('run-status', {
                    status: 'success',
                    message: `Ran Docker container: ${submission_name}`
                })
            })
        }
    )

    ipcMain.on('stop-submission', async (event: Electron.IpcMainEvent, submission_name: string) => {
        // Stop the docker container
        try {
            runCommand(
                `docker stop ${submission_name}`,
                `Stopping Docker container: ${submission_name}`
            ).then(() => {
                event.sender.send('stop-status', {
                    status: 'success',
                    message: `Stopped Docker container: ${submission_name}`
                })
            })
        } catch (error: any) {
            event.sender.send('stop-status', {
                status: 'error',
                message: `Error stopping Docker container: ${submission_name}`
            })
        }
    })
}

export default setupRunSubmissionsHandlers
