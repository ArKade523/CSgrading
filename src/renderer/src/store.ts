import { configureStore } from '@reduxjs/toolkit'
import assignmentReducer from './features/assignmentSlice'

const store = configureStore({
    reducer: {
        currentAssignment: assignmentReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
