import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setApiKey } from '@renderer/features/canvasApiKeySlice'

function SettingsView(): JSX.Element {
    const dispatch = useDispatch()

    const [canvasApiKey, setCanvasApiKey] = useState('')


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // window.api.saveCanvasApiKey(canvasApiKey)
        if (canvasApiKey) {
            dispatch(setApiKey(canvasApiKey))
        }
    }

    return (
        <section>
            <h1>Settings</h1>
            <p>Enter your Canvas API Key to enable the Canvas integration.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Canvas API Key
                    <input
                        id="canvas-api-key"
                        type="text"
                        placeholder="Enter your Canvas API Key here"
                        value={canvasApiKey}
                        onChange={(e) => setCanvasApiKey(e.target.value)}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
        </section>
    )
}

export default SettingsView
