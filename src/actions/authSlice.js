import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName : null,
    userEmail : null
}

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers: {
        setActiveUser:(state,action)=>{
            state.authSlice.userName=action.payload.userName
            state.authSlice.userEmail=action.payload.userEmail
        },
        setUserLogOut:(state)=>{
            state.userName=null
            state.userEmail=null
        }
    }
});

export const {
    setActiveUser,
    setUserLogOut
} = authSlice.actions

export const selectUserName = state => state.authSlice.userName
export const selectUserEmail = state => state.authSlice.userEmail

export default authSlice.reducer