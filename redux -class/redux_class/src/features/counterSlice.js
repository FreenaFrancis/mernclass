// // nammal reduxil 3 file create chaithuittu annu redux create chaiyathathu ,toolkitil
// // nammal slice annu use chaiyathathu

// import {createSlice} from '@reduxjs/toolkit';

// const initialState ={
//     count1:0
// }

// const counterSlice=createSlice({                          //create sliceilu object varum athilu 3 properties ind, nmae,statae and reducers
//  name:"counter",
//                                                                   //  initialState:initialState,
// initialState,
// reducers:{
//    increment:(state,action)=>{                             //nammal redux il action and reducers were created in seperate file il annu create chaithathu 
//       state.count1=state.count1+1                     
//                                                            //but in toolkit it is created automaticlly, ie action , reducer nte same name use chaithuttannu create chaiyunnathu
    
//    } ,

// }                                                         //ie, name,initial state,reducers

// })

// export default counterSlice;
// export const {increment} = counterSlice.actions;






// 


import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    count1:0
}

const counterSlice=createSlice({                          //create sliceilu object varum athilu 3 properties ind, nmae,statae and reducers
 name:"counter",
//  initialState:initialState,
initialState,
reducers:{
   increment:(state,action)=>{            //nammal redux il action and reducers were created in seperate file il annu create chaithathu 
      state.count1=state.count1+1                                  //but in toolkit it is created automaticlly, ie action , reducer nte same name use chaithuttannu create chaiyunnathu
    
   } ,
   decrement:(state)=>{
state.count1=state.count1-1
   }
}                                                         //ie, name,initial state,reducers

})

export default counterSlice.reducer;
export const {increment} = counterSlice.actions;





