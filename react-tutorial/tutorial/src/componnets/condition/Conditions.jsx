import React, { useState } from 'react'

function Conditions() {
const[istoggle,setToggle]=useState()


const handleClick=()=>{
setToggle(!istoggle);

}

  return (
    <div>
      <button onClick={handleClick}>toggle</button>
      <p>{istoggle ? 'The toggle is ON' : 'The toggle is OFF'}</p> 
    </div>
  )
}

export default Conditions
