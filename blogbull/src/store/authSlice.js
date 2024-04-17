import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    status:false,
    userData:null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state ,action)=>{
            state.status=true;
            state.userData= action.payload; // payload is data that we will send to the server 
        },
        logout:(state)=> {
            state.status= false;
            state.userData= null;
    },
}
});

export const {login,logout}=authSlice.actions;

// The function below is called a selector and helps us select a value from the store.

export default  authSlice.reducer;