import { app, shell, BrowserWindow, ipcMain, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'

function createWindow(): void {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1440,
        height: 900,
        show: false,
        autoHideMenuBar: true,
        ...(process.platform === 'linux' ? { icon } : {}),
        webPreferences: {
            preload: join(__dirname, '../preload/index.js'),
            sandbox: false
        }
    })

    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
    })

    mainWindow.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url)
        return { action: 'deny' }
    })

    // Handle the save-file request from the renderer process
    ipcMain.on('save-assignment', async (event, assignmentData) => {
        const { filePaths, canceled } = await dialog.showOpenDialog({
            title: 'Save New Assignment',
            defaultPath: path.join(app.getPath('documents'), assignmentData.name), // Default to documents
            buttonLabel: 'Select Folder',
            properties: ['openDirectory', 'createDirectory', 'promptToCreate'],
            message: 'Select a folder to save the new assignment'
        })

        if (!canceled && filePaths && filePaths[0]) {
            const baseFolderPath = filePaths[0]
            const newFolderPath = path.join(baseFolderPath, assignmentData.name)

            if (!fs.existsSync(newFolderPath)) {
                fs.mkdirSync(newFolderPath, { recursive: true })
            }

            const yamlFilePath = path.join(newFolderPath, 'csgrader.yaml')

            const yamlData = yaml.dump(assignmentData)
            fs.writeFile(yamlFilePath, yamlData, 'utf8', (err) => {
                if (err) {
                    event.reply('save-status', 'error')
                } else {
                    event.reply('save-status', 'success')
                }
            })
        } else {
            event.reply('save-status', 'canceled')
        }
    })

    ipcMain.on('open-assignment', async (event) => {
        const { filePaths, canceled } = await dialog.showOpenDialog({
            title: 'Open Assignment',
            defaultPath: app.getPath('documents'), // Default to documents
            buttonLabel: 'Open',
            properties: ['openDirectory'],
            message: 'Select an assignment to open'
        })

        if (!canceled && filePaths && filePaths[0]) {
            const assignmentFolderPath = filePaths[0]
            const yamlFilePath = path.join(assignmentFolderPath, 'csgrader.yaml')
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

                    // Update the submissions array
                    assignmentData.submissions = submissionFiles.map((fileName) => {
                        const filePath = path.join(submissionsFolderPath, fileName)

                        // Example file name: username_1234567890_submission_1.zip

                        // Splitting the file name into parts
                        const parts = fileName.split('_')
                        // Assuming first part is username, second part is a numerical identifier
                        const studentName = parts[0] // or format it as needed
                        const submissionTime = parts[1] // or convert this to a readable format

                        // The rest of the file name is the student-provided name
                        const studentProvidedName = parts.slice(3).join('_').replace('.zip', '')

                        return {
                            studentName: studentName,
                            submissionPath: filePath,
                            submissionTime: submissionTime,
                            submissionFiles: [studentProvidedName] // The student-provided file name
                        }
                    })
                }

                event.reply('open-status', { status: 'success', data: assignmentData })
            } else {
                event.reply('open-status', 'error')
            }
        } else {
            event.reply('open-status', 'canceled')
        }
    })

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
        mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    // Set app user model id for windows
    electronApp.setAppUserModelId('com.electron')

    // Default open or close DevTools by F12 in development
    // and ignore CommandOrControl + R in production.
    // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
    app.on('browser-window-created', (_, window) => {
        optimizer.watchWindowShortcuts(window)
    })

    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
