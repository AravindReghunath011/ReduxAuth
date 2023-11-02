import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null,
    userForEdit : {}
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            console.log(action.payload,'payload');
            state.userInfo = action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        logout:(state,action)=>{
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        },
        userDetails:(state,action)=>{
            console.log(action.payload,'payload userDetails');
            state.userForEdit = action.payload;
            
        },
    }
})

export const {setCredentials,logout,userDetails} = authSlice.actions;
export default authSlice.reducer;