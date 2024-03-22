import React, { useCallback, useState } from 'react'
import PrintTable from './PrintTable'

function Callback() {
    const[number,setNumber]=useState(0)
const[dark,setDark]=useState(false)

const style ={
    backgroundColor:dark ? "black" : "white",
    coler: dark ? 'white' :'black'
}

const CalculateNumber = useCallback(()=>{

    // return Calculation(number)
    return [number*1, number*2, number*3]
},[number])


  return (
    <div>
       <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
<PrintTable CalculateNumber = {CalculateNumber}></PrintTable> 
      <button onClick={()=> setDark(!dark)}>Toggle</button>
    </div>
  )
}

export default Callback
