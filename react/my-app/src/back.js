
import React from 'react'
import './back.css'
function Back(props) {
  return (
    <div>
        
     <img src='https://assets.ccbp.in/frontend/react-js/social-buttons-bg.png' alt='' />
     <h1>Social Buttons</h1>
     <div className='so'>
    <button >{props.text}   </button> 
    <button style={{backgroundColor:'blue'}} >{props.text1}</button>
    <button style={{backgroundColor:'white'}} >{props.text2}</button>
    </div>
    </div>
  )
}

export default Back
