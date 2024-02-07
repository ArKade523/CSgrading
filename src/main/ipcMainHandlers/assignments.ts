import { ipcMain, dialog, app } from 'electron'
import yaml from 'js-yaml'
import fs from 'fs'
const fsp = fs.promises
import path from 'path'
import extractZip from 'extract-zip'

const setupAssignmentsHandlers = () => {
    // Handle the save-file request from the renderer process
    ipcMain.on('save-assignment', async (event, assignmentConfig: CSgraderConfig) => {
        try {
            const { filePaths, canceled } = await dialog.showOpenDialog({
                title: 'Save New Assignment',
                defaultPath: path.join(app.getPath('documents')),
                buttonLabel: 'Select Folder',
                properties: ['openDirectory', 'createDirectory', 'promptToCreate'],
                message: 'Select a folder to save the new assignment'
            })

            if (!canceled && filePaths && filePaths[0]) {
                const baseFolderPath = filePaths[0]

                const newFolderPath = path.join(baseFolderPath, assignmentConfig.assignmentName)

                // Check and create the new folder path asynchronously
                await fsp.mkdir(newFolderPath, { recursive: true })

                const yamlFilePath = path.join(
                    newFolderPath,
                    `${assignmentConfig.assignmentName}.csgrader`
                )
                const yamlData = yaml.dump(assignmentConfig)

                // Write YAML data to the file
                await fsp.writeFile(yamlFilePath, yamlData, 'utf8')
                event.reply('save-status', 'success')
            } else {
                event.reply('save-status', 'canceled')
            }
        } catch (err) {
            console.error('Failed to save assignment:', err)
            // Reply with error details for better debugging and user feedback
            event.reply('save-status', { status: 'error', message: err })
        }
    })

    // Handle the open-assignment request from the renderer process
    ipcMain.on('open-assignment', async (event) => {
        const { filePaths, canceled } = await dialog.showOpenDialog({
            title: 'Select csgrader Configuration File',
            defaultPath: app.getPath('documents'), // Default to documents
            buttonLabel: 'Open',
            properties: ['openFile'],
            filters: [
                { name: 'csgrader Files', extensions: ['csgrader'] },
                { name: 'All Files', extensions: ['*'] }
            ],
            message: 'Select the csgrader configuration file for the assignment'
        })

        if (!canceled && filePaths && filePaths[0]) {
            const assignmentFolderPath = path.dirname(filePaths[0])
            console.log('Selected assignment folder:', assignmentFolderPath)
            const yamlFilePath = filePaths[0]
            const submissionsFolderPath = path.join(assignmentFolderPath, 'submissions')

            if (fs.existsSync(yamlFilePath)) {
                const yamlData = fs.readFileSync(yamlFilePath, 'utf8')
                const assignmentData: AssignmentData = {
                    directoryPath: assignmentFolderPath,
                    csgraderConfig: yaml.load(yamlData),
                    submissions: [],
                    selectedSubmission: null
                }

                // Check if submissions folder exists
                if (fs.existsSync(submissionsFolderPath)) {
                    // Read files in the submissions folder
                    const submissionFiles = fs.readdirSync(submissionsFolderPath)

                    for (const fileName of submissionFiles) {
                        const filePath = path.join(submissionsFolderPath, fileName)
                        const parts = fileName.split('_')
                        const studentName = parts[0]
                        const submissionTime = parts[1]
                        const studentProvidedName = parts.slice(3).join('_').replace('.zip', '')

                        if (
                            fileName.endsWith('.zip') &&
                            fs.existsSync(filePath) &&
                            fs.lstatSync(filePath).isFile()
                        ) {
                            const outputFolderPath = path.join(
                                assignmentFolderPath,
                                'unzipped_submissions',
                                studentName +
                                    '_' +
                                    submissionTime +
                                    '_submission_' +
                                    studentProvidedName
                            )

                            // only try to unzip if the folder does not exist
                            // TODO: Add a check to see if the folder does not contain all expected files
                            if (!fs.existsSync(outputFolderPath)) {
                                fs.mkdirSync(outputFolderPath, { recursive: true })

                                // extract zip file
                                try {
                                    await extractZip(filePath, { dir: outputFolderPath })
                                } catch (err) {
                                    console.error('Error extracting zip file', err)
                                    event.reply('open-status', {
                                        status: 'error',
                                        data: `Failed to extract ${fileName}`
                                    })
                                    return
                                }
                            }
                        }

                        assignmentData.submissions.push({
                            studentName: studentName,
                            submissionPath: filePath,
                            submissionTime: submissionTime,
                            submissionFiles: [studentProvidedName] // Update this as needed based on extraction result
                        })
                    }
                }

                event.reply('open-status', { status: 'success', data: assignmentData })
            } else {
                event.reply('open-status', { status: 'error', data: 'Invalid assignment folder' })
            }
        } else {
            event.reply('open-status', { status: 'canceled', data: null })
        }
    })
}

export default setupAssignmentsHandlers
