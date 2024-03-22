import React, { useState } from 'react'

function Logical() {
    const[toggle,setToggle]=useState()
    const handleClick =()=>{
setToggle(!toggle)
    }
  return (
    <div>
      <button onClick={handleClick()}></button>
      {toggle && <p>The toggle is ON</p>} 

{!toggle && <p>The toggle is OFF</p>} 
    </div>
  )
}

export default Logical
