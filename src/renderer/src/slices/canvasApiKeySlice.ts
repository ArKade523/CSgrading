import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@renderer/store'

const initialState = {
    apiKey: ''
}

const canvasApiKeySlice = createSlice({
    name: 'canvasApiKey',
    initialState,
    reducers: {
        setApiKey: (state, action) => {
            state.apiKey = action.payload
        }
    }
})

export const { setApiKey } = canvasApiKeySlice.actions

export const selectApiKey = (state: RootState) => state.canvasApiKey

export default canvasApiKeySlice.reducer
