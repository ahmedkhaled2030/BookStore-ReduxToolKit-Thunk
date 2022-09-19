import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        name : 'CodeBindHex'
    },

    reducers: {
        login: (state ,action) => {
            state.isLoggedIn = !state.isLoggedIn
        }
    }

})

export const { login } = authSlice.actions;
export default authSlice.reducer
