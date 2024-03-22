import React, { useMemo, useState } from 'react'

function Memo() {
const[number,setNumber]=useState(0)
const[dark,setDark]=useState(false)




function Calculation(n){


  console.log("loop");
  for(let i = 0; i < 1000000000; i++){}
      return n;
  
  }
const style ={
    backgroundColor:dark ? "black" : "white",
    coler: dark ? 'white' :'black'
}
// use memo  has 2 arguments ie, first one is callback function and the dependencies
// usememo will return a value but useeeffect doesnt return a value
const cNumber = useMemo(()=>{



  

    return Calculation(number)
},[number])//nomber is dependencies , it will re-render when we change this number

// const cNumber = Calculation(number)
  return (
    <div style={style}>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
      <h2>{cNumber}</h2>
      <button onClick={()=> setDark(!dark)}>Toggle</button>
    </div>
  )
}

//  here whwn render it takes some time inorder to we use usememo function
export default Memo

// This function, Calculation, takes a num parameter and performs a time-consuming loop operation.
//  It has a loop that runs a billion times (1,000,000,000) 
// without doing any actual work, which is likely included here for demonstration purposes.


