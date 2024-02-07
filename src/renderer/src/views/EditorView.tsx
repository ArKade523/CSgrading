import { useState } from 'react'
import Rubric from '@renderer/components/Rubric'
import SubmissionsViewer from '@renderer/components/SubmissionsViewer'
import { useSelector } from 'react-redux'
import { RootState } from '@renderer/store'

function EditorView(): JSX.Element {
    const currentAssignment = useSelector((state: RootState) => state.currentAssignment)
    const [iframeSrc, setIframeSrc] = useState('http://localhost:8001')

    const handleRun = () => {
        if (!currentAssignment.selectedSubmission) return
        window.api.runSubmission(
            currentAssignment.csgraderConfig.language,
            currentAssignment.selectedSubmission?.submissionPath,
            currentAssignment.selectedSubmission?.studentName
        )
    }

    const reloadIframe = () => {
        setIframeSrc('') // Clear src to trigger re-render
        setTimeout(() => setIframeSrc('http://localhost:8001'), 100) // Reset src
    }

    // Placeholder functions for navigation - you'll need to implement these based on your Electron setup
    const goBack = () => {
        console.log('Implement go back functionality')
    }

    const goForward = () => {
        console.log('Implement go forward functionality')
    }

    return (
        <section id="editor-view">
            <h1>Editor</h1>
            <div id="options-bar">
                <button>Save</button>
                <button onClick={handleRun}>Run</button>
                <button>Submit</button>
                <button onClick={reloadIframe}>Reload</button>
                <button onClick={goBack}>Back</button>
                <button onClick={goForward}>Forward</button>
            </div>
            <div className="container">
                <SubmissionsViewer />
                <Rubric />
                <div id="submission-viewer">
                    <iframe src={iframeSrc} title="Submission Viewer"></iframe>
                </div>
                {/* <MonacoEditor /> */}
            </div>
        </section>
    )
}

export default EditorView
