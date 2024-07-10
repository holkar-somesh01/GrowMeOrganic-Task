import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import UserSlice from "./Slices/UserSlice";
import { blogApi } from "./api/blogApi";


const reduxStore = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        auth: UserSlice
    },
    middleware: def => [...def(), userApi.middleware, blogApi.middleware]
})

export default reduxStore