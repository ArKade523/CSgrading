import { Reducer, configureStore } from '@reduxjs/toolkit'
import assignmentReducer from './slices/assignmentSlice'
import canvasApiKeyReducer from './slices/canvasApiKeySlice'
import userDataReducer from './slices/userDataSlice'
import { loadState, saveState } from './helpers/localStorage'

const persistedState = loadState()

interface State {
    currentAssignment: AssignmentData
    canvasApiKey: { apiKey: string }
    userData: { name: string; email: string; role: Role }
}

const reducer: Reducer<State> = (state = persistedState, action) => {
    return {
        currentAssignment: assignmentReducer(state.currentAssignment, action),
        canvasApiKey: canvasApiKeyReducer(state.canvasApiKey, action),
        userData: userDataReducer(state.userData, action)
    }
}

const store = configureStore({
    reducer: reducer,
    preloadedState: persistedState
})

// Subscribe to store updates to save the state to localStorage
store.subscribe(() => {
    saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
