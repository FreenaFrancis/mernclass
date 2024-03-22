import React from 'react'
import ChilddB from './ChilddB'
import ChilddC from './ChilddC'

function ChilddA({name}) {
  return (
    <div>
{/* <h1>{name}</h1> */}
     <ChilddB name={name}/> 
    </div>
  )
}

export default ChilddA
