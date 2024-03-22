import React, { useRef, useState } from 'react'

function Ref() {
    const[num,setNum]=useState(0);

    const inputOne = useRef()
    const inputTwo = useRef()

    const getNumBox = () =>{
        console.log(inputOne);
    }
    const getTextBox = () =>{
        console.log("hee");
    }
  return (
    <div>
      <h1>hell0</h1>
      <input  value={num} 
      type="number"
      onChange={(e) => setNum(e.target.value)}
      />
<br/>
      
      <input  value={num} 
      type="text"
      onChange={(e) => setNum(e.target.value)}/>
      <h1>value is:{num}</h1>
      <button onClick={() => getNumBox()}>rupees</button>
      <button onClick={() => getTextBox()}>dollar</button>
    </div>
  )
}

export default Ref
