import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@renderer/store'

const initialState: AssignmentData = {
    directoryPath: '',
    csgraderConfig: {
        assignmentName: '',
        description: '',
        language: ''
    },
    submissions: [],
    selectedSubmission: {
        studentName: '',
        submissionPath: '',
        submissionTime: '',
        submissionFiles: []
    }
}

const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {
        setDirectoryPath: (state, action) => {
            state.directoryPath = action.payload
        },
        setCSgraderConfig: (state, action) => {
            state.csgraderConfig = action.payload
        },
        setSubmissions: (state, action) => {
            state.submissions = action.payload
        },
        setSelectedSubmission: (state, action) => {
            state.selectedSubmission = action.payload
        }
    }
})

export const { setDirectoryPath, setCSgraderConfig, setSubmissions, setSelectedSubmission } =
    assignmentSlice.actions

export const selectAssignment = (state: RootState) => state.currentAssignment

export default assignmentSlice.reducer
