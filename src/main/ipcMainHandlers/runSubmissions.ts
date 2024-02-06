import { ipcMain } from 'electron'
import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec);

/* example: runDockerContainer('csgrader:python_3_12', 
            '/Users/kadeangell/Documents/csgradertest/submissions/allentyler_1632353_90498224_allen_tyler_assignment1.zip', 
            'allen_tyler_assignment1');
*/

const runDockerContainer = async (imageName: string, submissionPath: string, submissionName: string) => {
    const runCommand = async (command: string, description: string) => {
        console.log(description);
        try {
            const { stdout, stderr } = await execPromise(command);
            if (stdout) console.log(`stdout: ${stdout}`);
            if (stderr) console.log(`stderr: ${stderr}`);
        } catch (error: any) {
            console.error(`Error during ${description}: ${error.message}`);
            throw error; // Rethrow to break the execution flow
        }
    };

    try {
        // Run the docker container
        // Run in detached mode so that the next process can run
        await runCommand(`docker run -p 8001:80 --rm -d --name ${submissionName} ${imageName}`, `Running Docker container: ${submissionName}`);

        // Copy the submission to the docker container
        await runCommand(`docker cp ${submissionPath} ${submissionName}:/submission/submission.zip`, `Copying submission to container: ${submissionName}`);

        // Unzip the submission
        await runCommand(`docker exec ${submissionName} unzip -o /submission/submission.zip -d /submission/`, `Unzipping submission in container: ${submissionName}`);

        // Move the unzipped submission to the correct location
        // The submission is unzipped to a folder it contains
        // It's hard to know what the name of that folder is
        // So, we move all the files in that folder to the root of the submission folder
        // Then, we delete the folder
        // This is done to make it easier to run the submission
        // If it were still in that directory and we tried to run it, even if we know the name of the directory,
        // We have to change the working directory of the docker exec command to that directory to make it run correctly.
        // We have to assume the student did not write the code so the server.py file can be run from anywhere on the OS
        await runCommand(`docker exec ${submissionName} bash -c 'for dir in $(find /submission/ -mindepth 1 -maxdepth 1 -type d); do mv "$dir"/* /submission/; rmdir "$dir"; done'`, `Moving files in container: ${submissionName}`);

        // Run the submission
        await runCommand(`docker exec ${submissionName} python3 /submission/server.py`, `Executing submission in container: ${submissionName}`);

    } catch (error: any) {
        console.error(`Execution halted due to an error: ${error.message}`);
    }
}

const setupRunSubmissionsHandlers = () => {
    ipcMain.on('run-submission', async (_, language: string, submission_path: string, submission_name: string) => {
        // check if docker is installed
        const isDockerInstalled = exec('docker -v', (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                return false;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return false;
            }
            console.log(`stdout: ${stdout}`);

            return true;
        });

        if (!isDockerInstalled) {
            // TODO: send an error message to the renderer process
            return;
        }

        // check if the docker image exists
        let imageName = '';
        switch (language) {
            case 'python':
                imageName = 'csgrader_python_3_12';
                break;
            default:
                imageName = 'csgrader_python_3_12';
                break;
        }

        const dockerImageExists = exec(`docker image inspect ${imageName}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                return false;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return false;
            }
            console.log(`stdout: ${stdout}`);

            return true;
        });

        if (!dockerImageExists) {
            // TODO: send an error message to the renderer process
            return;
        }


        runDockerContainer(imageName, submission_path, submission_name);
    });
}

export default setupRunSubmissionsHandlers;