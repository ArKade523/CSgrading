import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@renderer/store'

const initialState = {
    name: '',
    email: '',
    role: 'TA' as Role
}

const userDataSlice = createSlice({
    name: 'userDataSlice',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
        }
    }
})

export const { setName, setEmail, setRole } = userDataSlice.actions

export const selectApiKey = (state: RootState) => state.userData

export default userDataSlice.reducer
