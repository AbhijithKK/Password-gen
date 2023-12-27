interface  AuthInterface{
    refresh:boolean
    name:string
    id:number
    auth:boolean
}

const initialState:AuthInterface={
    refresh:false,
    name:"",
    id:0,
    auth:false
}

import { createSlice } from "@reduxjs/toolkit"

const AuthSlice=createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        AuthCheckReducer:(state,action)=>{
            state.refresh=!state.refresh
            state.auth=action.payload.auth
            console.log('reff',state.refresh,state.auth);
        }
    }
})

export const {AuthCheckReducer}=AuthSlice.actions
export default AuthSlice.reducer
