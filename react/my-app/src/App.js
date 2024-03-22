


// import BasicCard from './components/NewCard';
// import axios from 'axios';




  // const [title,seTitle]=useState([])
  // const [value,setValue]=useState([])
  
  
  // let url='https://api.publicapis.org/entries'
  // axios.get(`${url}`).then((response)=>{
    
  //   const{count,entries}=response.data
  //   setValue(entries)
  //   console.log(entries);
  // })
  // return(
  //   <div className='card' >
      
  //     {value.map((response)=>(
      
  //     <BasicCard 
      
  //     title={response.API} 
      
  //     />
  //     ))}


//   import React from "react";
// import Chennai from "./components/chennai";
//   function App(){
//   let data=[{
    
//     h1:'SUPER OVER LEAGUE',
//     image:'https://assets.ccbp.in/frontend/react-js/rcb-img.png' ,
//   },
//   {
    
//     image:'https://assets.ccbp.in/frontend/react-js/csk-img.png' 
//   }]
//   return(

//     <div style={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
     
//      {/* <Chennai body={<img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" alt=""></img>} />  */}
//    {data.map((value)=>{ //to loop continouslly based on the updates
//     return(
//       <Chennai image={value.image} h1={value.h1} />
//     )
//    })}


//     </div>
//   )
//   }
  

// export default App;

// import React from 'react'
// import Back from './back'
// let data=[
//   {
//   text:'Like',
//   text1:'Comment',
  
//   Text2:'Share'
//   },
//   {
//   text:'Like',
//   text1:'Comment',
  
//   Text2:'Share'
//   }
   
 
// ]
// function App() {
//   return (
//     <div>
//        {data.map((value)=>{ 
//           return(
//             <Back text={value.text} text1={value.text1} text2={value.Text2} style1={value.style1} />
//           )
//           })}

//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Task3 from './task3'
// let data=[
//   {
//     image:'https://assets.ccbp.in/frontend/react-js/reusable-banners-card-1-bg.png',
//     title:'Get the seasons all latest designs in a flick of your head',
//     head:'The sessions latest',
//     button:'show more',
//     style:{marginTop:'-846px',marginLeft:'112px',position:'absolute'}
//    } ,

//    {
//     image:'https://assets.ccbp.in/frontend/react-js/reusable-banners-card-2-bg.png',
//     title:'Get the seasons all latest designs in a flick of your head',
//     head:'Our New Design',
//     button:'show more',
//     style:{marginTop:'-803px',marginLeft:'1017px',position:'absolute'}
//   },


//     {
//     image:'https://assets.ccbp.in/frontend/react-js/reusable-banners-card-3-bg.png',
//     title:'Get the seasons all latest designs in a flick of your head',
//     head:'Insiders',
//     button:'show more',
//     style:{marginTop:'-584px',marginLeft:'1173px',position:'absolute'}
//   }
// ]
// function App() {
//   return (

//     <div>
//       {data.map((value)=>{ 
//           return(
//              <Task3 image={value.image} title={value.title} head={value.head} button={value.button} style={value.style} />
//            )
//            })}
//     </div>
//   )
// }

// export default App


import React from 'react'
import Home from './home'
import About from './About'
import Layout from './Layout'
import Service from './Service.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact'

function App() {
  return (
    <div>
      <BrowserRouter>

      
      <Routes>
      <Route path='/' element={<Layout/>}>

        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App


// import React from 'react'
// // import Account from './Account'
// import SideNav from './SideNav'
// import Viewaccount from './viewaccount'
// import Frontend from './components/frontend'
// import Account from './Account'
// import Update from './update'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// function App() {
//   return (
//     <div>
//      {/* <SideNav/> */}
//      <BrowserRouter>
//      <Routes>
//       <Route path="/" element={<Frontend/>}></Route>
//       <Route path="/account" element={<Account/>}></Route>
//       <Route path="/viewaccount" element={<Viewaccount/>}></Route>
//       <Route path="/edit/:id" element={<Update/>}></Route>
//      </Routes>
//      </BrowserRouter>
   
     
      
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import {useSelector,useDispatch} from 'react-redux'
// import { increment,decrement } from './components/redux_conf';

// function App() {
//   const dispatch=useDispatch()
//   const result = useSelector((state)=>state.cart)
//   console.log(result);
  
//   return (
//     <div className="App">
//       <h1>{result.count}</h1>
//       <button onClick={()=>dispatch(increment())}>Increment</button>
//       <button onClick={()=>dispatch(decrement())}>Decrement</button>
   
//     </div>
//   )
// }

// export default App






