import React, { useState } from 'react'
function App(){



const [name,setname]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const [status,setstatus]=useState(false)

const handlesubmit =(event)=>{ event.preventDefault()
    setstatus(true)
}

const handlename =(event)=> setname(event.target.value)
const handleemail =(event)=>  setemail(event.target.value)
const handlepassword =(event)=> setpassword(event.target.value)

  return (
    
        
        <div>
   <center>
     
    <form style={{display:'table-caption'}} onSubmit={handlesubmit} >
      <h4>Login</h4>
      <input type='text' placeholder='Name' onChange={handlename} value={name}/>
      <input type="text" placeholder='Email' onChange={handleemail} value={email}/>
      <input type="text " placeholder='Password'onChange={handlepassword} value={password}/>
      <button type='submit' style={{backgroundColor:'blue'}}>Submit</button>
    </form>
 
 {status&&
  <div>
    <p>Name :{name}</p>
    <p>Email :{email}</p>
    <p>Password :{password}</p>
  </div>
}
  </center>
    </div>
 
  )
}
export default App

