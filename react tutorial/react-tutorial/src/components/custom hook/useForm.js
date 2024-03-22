// import React, { useState } from 'react'
// //useform il annu custom hooks use chaiyunnae, nammal nerathea form.js il kodutha function ennai evidea ninnu access chaiyan pattum
// //ie, nammal formil kodutha state mootham evidea indavanam
// function useForm(initialValue) {  
//     const[value,setValue]=useState("")//evide value 
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default useForm

import  { useState } from 'react'

export const useForm = (initialValue) => {
    const[value,setValue]=useState(initialValue)
  return [
    value,    // value
    (event)=>{
        setValue({//onchange event
            ...value,
            [event.target.name]:event.target.value,
        })
    }
  ]
   
  
}


