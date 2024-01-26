import { useState, FormEvent, useEffect } from 'react'
import { redirect } from 'react-router-dom'

function CreateAssignment() {
    const [assignmentName, setAssignmentName] = useState<string>('')
    const [assignmentDescription, setAssignmentDescription] = useState<string>('')
    const [assignmentLanguage, setAssignmentLanguage] = useState<string>('')

    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const assignmentData = {
            name: assignmentName,
            description: assignmentDescription,
            language: assignmentLanguage
        }
        await window.api.saveAssignment(assignmentData)

        // Clear the form
        setAssignmentName('')
        setAssignmentDescription('')
        setAssignmentLanguage('')
        
    }
    
    useEffect(() => {
        const handleSaveStatus = (status: string) => {
            if (status === 'success') {
                console.log('Assignment saved successfully.')
                redirect('/editor')
            } else if (status === 'error') {
                console.error('Error saving assignment.')
            } else {
                console.log('Save canceled.')
            }
        }

        const unsubscribe = window.api.onSaveStatus(handleSaveStatus)

        // Cleanup the listener when the component unmounts
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div className="dialog">
            <h2>Create New Assignment</h2>
            <form id="create-assignment-form" onSubmit={handleFormSubmit}>
                <label>
                    Assignment Name:
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setAssignmentName(e.target.value)}
                        value={assignmentName}
                        required
                    />
                </label>
                <label>
                    Assignment Description:
                    <input
                        type="text"
                        name="description"
                        onChange={(e) => setAssignmentDescription(e.target.value)}
                        value={assignmentDescription}
                        required
                    />
                </label>
                <div>
                    Assignment Language:
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="python"
                            onChange={(e) => setAssignmentLanguage(e.target.value)}
                            checked={assignmentLanguage === 'python'}
                            required
                        />
                        Python
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="javascript"
                            onChange={(e) => setAssignmentLanguage(e.target.value)}
                            checked={assignmentLanguage === 'javascript'}
                        />
                        JavaScript
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="java"
                            onChange={(e) => setAssignmentLanguage(e.target.value)}
                            checked={assignmentLanguage === 'java'}
                        />
                        Java
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="cpp"
                            onChange={(e) => setAssignmentLanguage(e.target.value)}
                            checked={assignmentLanguage === 'cpp'}
                        />
                        C++
                    </label>
                </div>
                <button type="submit">Create Assignment</button>
            </form>
        </div>
    )
}

export default CreateAssignment
