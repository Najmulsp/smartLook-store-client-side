import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import postReducer from "@/features/posts/postSlice";



const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postReducer,

    }
})

export default store;