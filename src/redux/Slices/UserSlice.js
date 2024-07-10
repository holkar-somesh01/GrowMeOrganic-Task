import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")),
        userId: 0
    },
    reducers: {
        logout: (state, { payload }) => {
            localStorage.removeItem("user")
            state.user = null
        }
    },
    extraReducers: builder => builder
        .addMatcher(userApi.endpoints.RegisterUser.matchFulfilled, (state, { payload }) => {
            state.user = { ...payload, userId }
        })
        .addMatcher(userApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
})

export const { logout } = userSlice.actions
export default userSlice.reducer