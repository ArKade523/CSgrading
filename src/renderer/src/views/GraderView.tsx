import { useEffect, useState } from 'react'
import Rubric from '@renderer/components/Rubric'
import SubmissionsSelector from '@renderer/components/SubmissionsSelector'
import { useSelector } from 'react-redux'
import { RootState } from '@renderer/store'
import { toast } from 'react-toastify'
import SHA256 from 'crypto-js/sha256'

function GraderView(): JSX.Element {
    const currentAssignment = useSelector((state: RootState) => state.currentAssignment)
    const [iframeSrc, setIframeSrc] = useState('http://localhost:8001')
    const [consoleOutput, setConsoleOutput] = useState<{ message: string; type: string }[]>([])

    const handleRun = () => {
        if (!currentAssignment.selectedSubmission) return
        window.api.runSubmission(
            currentAssignment.csgraderConfig.language,
            currentAssignment.selectedSubmission.submissionPath,
            currentAssignment.selectedSubmission.studentName
        )
    }

    const handleStop = () => {
        if (!currentAssignment.selectedSubmission) return
        window.api.stopSubmission(currentAssignment.selectedSubmission.studentName)
    }

    // scroll to bottom of console output
    useEffect(() => {
        const consoleOutput = document.getElementById('console-output')
        if (consoleOutput) {
            consoleOutput.scrollTop = consoleOutput.scrollHeight
        }
    }, [consoleOutput])

    useEffect(() => {
        const unsubscribe = window.api.onStopStatus(
            (status: { status: string; message: string }) => {
                if (status.status === 'success') {
                    toast.success(status.message)
                    setTimeout(reloadIframe, 200)
                } else if (status.status === 'error') {
                    toast.error(status.message)
                }
            }
        )

        return () => {
            unsubscribe()
        }
    }, [])

    useEffect(() => {
        const unsubscribe = window.api.onRunStatus(
            (status: { status: string; message: string }) => {
                if (status.status === 'success') {
                    toast.success(status.message)
                    setTimeout(reloadIframe, 200)
                } else if (status.status === 'error') {
                    toast.error(status.message)
                } else if (status.status === 'console-message') {
                    setConsoleOutput((currentConsoleOutput) => [
                        ...currentConsoleOutput,
                        { message: status.message, type: 'message' }
                    ])
                } else if (status.status === 'console-error') {
                    setConsoleOutput((currentConsoleOutput) => [
                        ...currentConsoleOutput,
                        { message: status.message, type: 'error' }
                    ])
                }
            }
        )

        return () => {
            unsubscribe()
        }
    }, [])

    const reloadIframe = () => {
        console.log('Reloading iframe')
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
        <section id="grader-view">
            <h1>Grader</h1>
            <div id="options-bar">
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleRun}>Run</button>
                <button>Submit</button>
            </div>
            <div className="container">
                <SubmissionsSelector />
                <Rubric />
                <div id="submission-viewer">
                    <button onClick={reloadIframe}>Reload</button>
                    <button onClick={goBack}>Back</button>
                    <button onClick={goForward}>Forward</button>
                    <iframe src={iframeSrc} title="Submission Viewer"></iframe>
                    <div id="console-output">
                        {consoleOutput.map((line, i) => (
                            <p key={SHA256(line.message + i)} className={line.type}>
                                {line.message}
                            </p>
                        ))}
                    </div>
                </div>
                {/* <MonacoEditor /> */}
            </div>
        </section>
    )
}

export default GraderView
