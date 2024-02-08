import { ElectronAPI } from '@electron-toolkit/preload'
import { languages } from 'monaco-editor'

declare global {
    interface Window {
        electron: ElectronAPI
        api: {
            saveAssignment: (assignmentData: any) => Promise<string>
            onSaveStatus: (callback: (status: string) => void) => () => void
            openAssignment: () => Promise<Assignment>
            onOpenStatus: (
                callback: (status: { status: string; data: AssignmentData | null }) => void
            ) => () => void
            runSubmission: (
                language: string,
                submissionPath: string,
                submissionName: string
            ) => Promise<string>
            onRunStatus: (
                callback: (status: { status: string; message: string }) => void
            ) => () => void
            stopSubmission: (submissionName: string) => Promise<string>
            onStopStatus: (
                callback: (status: { status: string; message: string }) => void
            ) => () => void
        }
    }
}
