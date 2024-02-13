import { configureStore } from '@reduxjs/toolkit'
import assignmentReducer from './features/assignmentSlice'
import canvasApiKeyReducer from './features/canvasApiKeySlice'

const store = configureStore({
    reducer: {
        currentAssignment: assignmentReducer,
        canvasApiKey: canvasApiKeyReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
