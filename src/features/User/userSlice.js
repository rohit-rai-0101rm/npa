import {createSlice} from '@reduxjs/toolkit'


export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        isLoggedIn:false
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload
        },
        logout:(state,action)=>{
            state.user=null
        }
    }

})
export const{
    login,
    logout
}=userSlice.actions
export const selectUser=(state)=>state.user.user
export const isLoggedIn=(state)=>state.user.isLoggedIn

export default userSlice.reducer