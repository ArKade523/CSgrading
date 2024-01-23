import Editor from '@monaco-editor/react'

function MonacoEditor() {
    return (
        <Editor
            height="90vh"
            defaultLanguage="python"
            defaultValue="# some comment"
            theme="vs-dark"
        />
    )
}

export default MonacoEditor
