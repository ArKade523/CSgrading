import { FormEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    setDirectoryPath,
    setCSgraderConfig,
    setSubmissions,
    setSelectedSubmission
} from '@renderer/features/assignmentSlice'
import store from '@renderer/store'

function OpenAssignment() {
    const dispatch = useDispatch()

    const lookForAssignment = async (e: FormEvent) => {
        e.preventDefault()
        const result = await window.api.openAssignment()
        if (result.status === 'success') {
            console.log(result.data)
            console.log('State Before: ')
            console.log(store.getState().currentAssignment)
            dispatch(setDirectoryPath(result.data.directoryPath))
            dispatch(setCSgraderConfig(result.data.csgraderConfig))
            dispatch(setSubmissions(result.data.submissions))
            dispatch(setSelectedSubmission(result.data.submissions[0]))

            console.log('State After: ')
            console.log(store.getState().currentAssignment)
        }
    }

    useEffect(() => {
        const handleOpenStatus = (status: string) => {
            if (status === 'success') {
                console.log('Assignment opened successfully.')
            } else if (status === 'error') {
                console.error('Error opening assignment.')
            } else {
                console.log('Open canceled.')
            }
        }

        const unsubscribe = window.api.onOpenStatus(handleOpenStatus)

        // Cleanup the listener when the component unmounts
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div className="dialog">
            <h2>Open Existing Assignment</h2>
            <form onSubmit={lookForAssignment}>
                <button>Open Assignment</button>
            </form>
        </div>
    )
}

export default OpenAssignment
