import React from 'react'

function Task3(props) {
  return (
    <div >
      <img src={props.image} alt=''/>
      <div  style= {props.style}>
        <h1 style={{fontSize:'80px'}}>{props.head}</h1>
        <h2 style={{fontSize:'50px'}}>{props.title}</h2>
        <button style={{width:'150px',height:'50px',fontSize:'20px',borderColor:'solidBlack'}}>{props.button}</button>
      </div>
    </div>
  )
}

export default Task3
