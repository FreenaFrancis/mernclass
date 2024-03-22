import {createSlice} from '@reduxjs/toolkit';
 
const initialstate={
    
count:0,
}

const cart = createSlice({
    name:'count',
    initialState:initialstate,
 reducers:{
    increment:(state)=>{
      state.count+=1
    },
    decrement:(state)=>{
        state.count-=1
      }
 } 
 
})

export const {increment,decrement}=cart.actions
export default cart.reducer