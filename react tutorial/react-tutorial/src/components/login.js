// import React, {useState} from 'react'
// // import './login.css'
// // import axios from 'axios'
// import {Link,useNavigate} from 'react-router-dom'
// // import Layout from '../layout/layout'
// function Login() {
  
// //   const navogator = useNavigate()
// const [name,setName]=useState('')
// const [password,setpassword]=useState('')
// const [status,setstatus]=useState(false)

// const handlesubmit =async (event)=>{ event.preventDefault()  //async- await kodukumpol async use chaiyanam
//     setstatus(true)
//     console.log('submitted');
//     // let response =await axios.post("http://localhost:4000/login",{email,password})
   
    
// }

 
  



// const handlename =(event)=>  setName(event.target.value)
// const handlepassword =(event)=> setpassword(event.target.value)

//     return(

//          <div className='log'> 
          
//             <div className='hi'> 
//                  <form style={{display:'table-caption'}} onSubmit={handlesubmit} > 
//        <h2
       
       
//        >Login</h2>
      
//        <div className="txt_field"><label>Userame:</label><input type="text" placeholder='Username' onChange={handlename} value={name}/></div>
//        <div className="txt_field"><label>Password:</label><input type="text " placeholder='Password'onChange={handlepassword} value={password}/></div>
      
       
//       <button className='but' type='submit' >Login</button> 
//        {/* <Link to={'/layout'} style={{color:'white'}}type ='button'>submit</Link> */}
//      </form>
//     </div>  
//     {status&&
//   <div>
    
//     <p>username :{name}</p>
//     <p>Password :{password}</p>
//     <p>profile:{}</p>
//   </div>
// }
            
//         </div>
//     )
    
// }
// export default Login



import React, { useState } from 'react'

function Login() {
  const[name,setName]=useState('')
const[password,setPassword]=useState('')
const[status,setstatus]=useState(false)

const handlename = (event) =>  setName(event.target.value)

const handlepassword=(event)=> setPassword(event.target.value)

const handleSubmit =(event)=>{
  setstatus(true)
  event.preventDefault();
console.log('submitted');


}
  return (
    <div>
       <form onClick={handleSubmit}>
    
      
             <div className="txt_field"><label>Userame:</label><input type="text"
              placeholder='Username' onChange={handlename} value={name}/></div>
             <div className="txt_field"><label>Password:</label><input type="text "
              placeholder='Password'onChange={handlepassword} value={password}/></div>
            
             
            <button className='but' type='submit' >Login</button> 
            
           </form>

           {status&&
  <div>
    
    <p>username :{name}</p>
    <p>Password :{password}</p>
    {/* <p>profile:{}</p> */}
  </div>
}
           
    </div>
  )
}

export default Login
