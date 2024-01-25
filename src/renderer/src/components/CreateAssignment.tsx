import { useState } from "react";

function CreateAssignment() {
    const [assignmentName, setAssignmentName] = useState<string>('');
    const [assignmentDescription, setAssignmentDescription] = useState<string>('');
    const [assignmentLanguage, setAssignmentLanguage] = useState<string>('');

    return (
        <div className="dialog">
            <h2>Create New Assignment</h2>
            <form id="create-assignment-form">
                <label>
                    Assignment Name:
                    <input
                        type="text"
                        name="name"
                        onChange={e => setAssignmentName(e.target.value)}
                        value={assignmentName}
                    />
                </label>
                <label>
                    Assignment Description:
                    <input
                        type="text"
                        name="description"
                        onChange={e => setAssignmentDescription(e.target.value)}
                        value={assignmentDescription}
                    />
                </label>
                <div>
                    Assignment Language:
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="python"
                            onChange={e => setAssignmentLanguage(e.target.value)}
                            checked={assignmentLanguage === 'python'}
                        />
                        Python
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="javascript"
                            onChange={e => setAssignmentLanguage(e.target.value)}
                            checked={assignmentLanguage === 'javascript'}
                        />
                        JavaScript
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="java"
                            onChange={e => setAssignmentLanguage(e.target.value)}
                            checked={assignmentLanguage === 'java'}
                        />
                        Java
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="language"
                            value="cpp"
                            onChange={e => setAssignmentLanguage(e.target.value)}
                            checked={assignmentLanguage === 'cpp'}
                        />
                        C++
                    </label>
                </div>
                <button type="submit">Create Assignment</button>
            </form>
        </div>
    );
}

export default CreateAssignment;
