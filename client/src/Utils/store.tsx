import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './reducers'
export const store=configureStore({
    reducer:{
        auth:AuthSlice
    }
})

