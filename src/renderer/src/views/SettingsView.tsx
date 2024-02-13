import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@renderer/store'
import { setApiKey } from '@renderer/slices/canvasApiKeySlice'
import { setName, setEmail, setRole } from '@renderer/slices/userDataSlice'
import { toast } from 'react-toastify'

function SettingsView(): JSX.Element {
    const dispatch = useDispatch()
    const { apiKey } = useSelector((state: RootState) => state.canvasApiKey)
    const { name, email, role } = useSelector((state: RootState) => state.userData)

    const [canvasApiKey, setCanvasApiKey] = useState('')
    const [localName, setLocalName] = useState('')
    const [localEmail, setLocalEmail] = useState('')
    const [localRole, setLocalRole] = useState('TA' as Role)

    const handleApiSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // window.api.saveCanvasApiKey(canvasApiKey)
        if (canvasApiKey) {
            const success = dispatch(setApiKey(canvasApiKey))
            if (success) {
                toast.success('Canvas API Key saved successfully')
            } else {
                toast.error('Failed to save Canvas API Key')
            }
        }

        setCanvasApiKey('')
    }

    const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (localName && localEmail && localRole) {
            const nameSuccess = dispatch(setName(localName))
            const emailSuccess = dispatch(setEmail(localEmail))
            const roleSuccess = dispatch(setRole(localRole))

            if (nameSuccess && emailSuccess && roleSuccess) {
                toast.success('User information saved successfully')
            } else {
                toast.error('Failed to save user information')
            }
        }

        setLocalName('')
        setLocalEmail('')
        setLocalRole('TA' as Role)
    }

    return (
        <section>
            <h1>Settings</h1>
            <div className="container-column">
                <div className="dialog">
                    <h2>Canvas API Key</h2>
                    <form onSubmit={handleApiSubmit}>
                        <p>Existing API Key: {apiKey.replace(/./g, '*')}</p>
                        <input
                            id="canvas-api-key"
                            type="text"
                            placeholder="Enter your Canvas API Key here"
                            value={canvasApiKey}
                            onChange={(e) => setCanvasApiKey(e.target.value)}
                            required
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
                <div className="dialog">
                    <h2>User Information</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Role: {role}</p>
                    <form onSubmit={handleUserSubmit}>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={localName}
                            onChange={(e) => setLocalName(e.target.value)}
                            required
                        />
                        <input
                            id="email"
                            type="text"
                            placeholder="Email"
                            value={localEmail}
                            onChange={(e) => setLocalEmail(e.target.value)}
                            required
                        />
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="TA"
                                    checked={localRole === 'TA'}
                                    onChange={() => setLocalRole('TA' as Role)}
                                    required
                                />
                                TA
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="Teacher"
                                    checked={localRole === 'Teacher'}
                                    onChange={() => setLocalRole('Teacher' as Role)}
                                />
                                Teacher
                            </label>
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SettingsView
