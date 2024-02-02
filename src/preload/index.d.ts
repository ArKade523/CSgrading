import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
    interface Window {
        electron: ElectronAPI
        api: {
            saveAssignment: (assignmentData: any) => Promise<string>
            onSaveStatus: (callback: (status: string) => void) => () => void
            openAssignment: () => Promise<Assignment>
            onOpenStatus: (callback: (status: {status: string, data: AssignmentData | null}) => void) => () => void
        }
    }
}
