import Editor from '@monaco-editor/react'

function MonacoEditor(): JSX.Element {
    return (
        <div>
            <Editor
                height="90vh"
                defaultLanguage="python"
                defaultValue="# some comment"
                theme="vs-dark"
            />
        </div>
    )
}

export default MonacoEditor
