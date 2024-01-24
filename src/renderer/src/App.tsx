// import icons from './assets/icons.svg'
import MonacoEditor from './components/MonacoEditor'
import { useState } from 'react'

enum States {
    HOME,
    EDITOR,
    SETTINGS,
    ABOUT,
}

function App(): JSX.Element {
    const [state, setState] = useState(States.HOME);


    return (
        <div className="App">
            <h1>CS Grading</h1>
            {state === States.HOME && (
                <div>
                    <button onClick={() => setState(States.EDITOR)}>Editor</button>
                    <button onClick={() => setState(States.SETTINGS)}>Settings</button>
                    <button onClick={() => setState(States.ABOUT)}>About</button>
                </div>
            )}
            {state === States.EDITOR && (
                <div>
                    <button onClick={() => setState(States.HOME)}>Home</button>
                    <MonacoEditor />
                </div>
            )}
            {state === States.SETTINGS && (
                <div>
                    <button onClick={() => setState(States.HOME)}>Home</button>
                    <p>Settings</p>
                </div>
            )}
            {state === States.ABOUT && (
                <div>
                    <button onClick={() => setState(States.HOME)}>Home</button>
                    <p>About</p>
                </div>
            )}
        </div>
    )
}

export default App
