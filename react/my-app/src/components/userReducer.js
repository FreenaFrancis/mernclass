import { createSlice } from "@reduxjs/toolkit";   //collection is passed
import { userList } from "./data";


const userSlice = createSlice({
    name:'users',
    initialState: userList,
    reducers:{
     addUser: (state,action) => {
       console.log(action) 
       state.push(action.payload)
     },
     updateUser: (state,action)=> {
      console.log(action,'-------data');
const {id, firstname, lastname, email, description, number, bio} = action.payload;
const uu= state.find(user=> user.id === id);
if (uu) {
  uu.firstname = firstname;
  uu.lastname = lastname;  
  uu.email = email;
  uu.number = number;
  uu.description = description;
  uu.bio = bio;

}
     },
     deleteUser:(state,action) =>{
      const {id} = action.payload;
const uu= state.find(user=> user.id === id);
if(uu) {
  return state.filter (f => f.id !== id)
}
     }

    }
})
export const {addUser,updateUser,deleteUser} = userSlice.actions;
export default userSlice.reducer