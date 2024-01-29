import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
    saveAssignment: (data) => {
        return new Promise((resolve) => {
            ipcRenderer.send('save-assignment', data)
            ipcRenderer.once('save-status', (_, status) => {
                resolve(status) // Resolve the promise with the save status
            })
        })
    },
    onSaveStatus: (callback) => {
        const handler = (_, status) => callback(status)
        ipcRenderer.on('save-status', handler)

        return () => ipcRenderer.removeListener('save-status', handler)
    },
    openAssignment: () => {
        return new Promise((resolve) => {
            ipcRenderer.send('open-assignment')
            ipcRenderer.once(
                'open-status',
                (_, status: { status: string; data: AssignmentData }) => {
                    resolve(status) // Resolve the promise with the save status
                }
            )
        })
    },
    onOpenStatus: (callback) => {
        const handler = (_, status) => callback(status)
        ipcRenderer.on('open-status', handler)

        return () => ipcRenderer.removeListener('open-status', handler)
    }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', electronAPI)
        contextBridge.exposeInMainWorld('api', api)
    } catch (error) {
        console.error(error)
    }
} else {
    // @ts-ignore (define in dts)
    window.electron = electronAPI
    // @ts-ignore (define in dts)
    window.api = api
}
