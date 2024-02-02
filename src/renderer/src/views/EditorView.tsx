// import MonacoEditor from '@renderer/components/MonacoEditor'
import Rubric from '@renderer/components/Rubric'
import SubmissionsViewer from '@renderer/components/SubmissionsViewer'

function EditorView(): JSX.Element {
    return (
        <section id="editor-view">
            <h1>Editor</h1>
            <div id="options-bar">
                <button>Save</button>
                <button>Run</button>
                <button>Submit</button>
            </div>
            <div className="container">
                <SubmissionsViewer />
                <Rubric />
                {/* <MonacoEditor /> */}

            </div>
        </section>
    )
}

export default EditorView
