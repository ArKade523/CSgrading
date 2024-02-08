import { FormEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    setDirectoryPath,
    setCSgraderConfig,
    setSubmissions,
    setSelectedSubmission
} from '@renderer/features/assignmentSlice'
import { useNavigate } from 'react-router-dom'

function OpenAssignment() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const lookForAssignment = async (e: FormEvent) => {
        e.preventDefault()
        const result = await window.api.openAssignment()
        if (result.status === 'success') {
            dispatch(setDirectoryPath(result.data.directoryPath))
            dispatch(setCSgraderConfig(result.data.csgraderConfig))
            dispatch(setSubmissions(result.data.submissions))
            dispatch(setSelectedSubmission(result.data.submissions[0]))
            navigate('/grader')
        }
    }

    useEffect(() => {
        const handleOpenStatus = (status: { status: string; data: AssignmentData | null }) => {
            if (status.status === 'success') {
                console.log('Assignment opened successfully.')
            } else if (status.status === 'error') {
                console.error('Error opening assignment.')
            } else {
                console.log('Open canceled with status: ', status)
            }
        }

        const unsubscribe = window.api.onOpenStatus(handleOpenStatus)

        // Cleanup the listener when the component unmounts
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <button onClick={lookForAssignment}>Open Assignment</button>
    )
}

export default OpenAssignment
