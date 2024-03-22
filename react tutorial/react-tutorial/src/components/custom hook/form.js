import React, { useState } from 'react'
import { useForm } from './useForm'

function Forms() {
    // const[name,setName]=useState("")
    // const[email,setEmail]=useState("")
    const[value,handlechange]=useForm({
        name:"",                  // inputs nte names 
        email:"",
        
    });
    console.log(value.email);
    console.log(value.name);
  return (
    <div>
      {/* <input type='text' name='name' value={name} onChange={(event)=>setName}></input>
      <input type='text' email='email' value={email} onChange={(event)=>setEmail}></input> */}

<input type='text' name='name' value={value.name} onChange={handlechange}></input>
      <input type='text' email='email' value={value.email} onChange={handlechange}></input>
    </div>
  )
}

export default Forms
