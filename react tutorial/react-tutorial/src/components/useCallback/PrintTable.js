import React, { useEffect, useState } from 'react'

function PrintTable({CalculateNumber}) {
    const [ row, setRow]=useState([])

    useEffect (()=>{
        console.log("table printed");
        setRow(CalculateNumber)
      },[CalculateNumber])
  return (
    <div>
      {row.map(r => (
        <p>r</p>
      ))}
    </div>
  )
}

export default PrintTable
