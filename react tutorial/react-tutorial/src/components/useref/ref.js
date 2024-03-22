// // // The useRef Hook allows you to persist values between renders.

// // // It can be used to store a mutable value that does not cause a re-render when updated.

// // // It can be used to access a DOM element directly.

// import React, { useState, useRef, useEffect } from 'react';

// function Refstate() {
//   const [inputValue, setInputValue] = useState("");
// //   const count = useRef(0);
// const [count, setCount] = useState(0)

//   useEffect(() => {
//     // count.current = count.current + 1;
//     setCount(count+1);
//   });

//   return (
//     <div>
//       <input
      
//         type="text"
//         value={inputValue}
//         // onChange={(e) => setInputValue(e.target.value)}
//         onChange={(e) => setCount(e.target.value)}
//       />
//       {/* <h1>Render Count: {count.current}</h1> */}
//       <h1>Render Count: {count}</h1>
//       {/* button onClick={handleElement}>click </button> */}
//     </div>
//   );
// }

// export default Refstate;






// import React, { useState, useRef, useEffect } from 'react';

// function Refstate() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);
// // const [count, setCount] = useState(0)

//   useEffect(() => {
//     count.current = count.current + 1;
    
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         // onChange={(e) => setCount(e.target.value)}
//       />
      
//       <h1>Render Count: {count.current}</h1>
      
//     </div>
//   );
// }

// export default Refstate;


// import React, { useRef } from 'react'

// function Refstate() {
//     const inputEle= useRef()
//     console.log(inputEle);
//     const handleElement=()=>{
//         // console.log(inputEle.current);
//         inputEle.current.style.width="250px"
//         inputEle.current.focus()
//     }
//   return (
//     <div>
//       <input type="text" ref={inputEle}/>
//       <button onClick={handleElement}>click </button>
//     </div>
//   )
// }

// export default Refstate


import React, { useEffect, useRef, useState } from 'react'

function Refs() {
  const[name,setName]=useState("")
  const count=useRef(0)
  useEffect(()=>{
    count.current=count.current + 1;
  })
  return (
    <div>
      <input type='text' onChange={e=>setName(e.target.value)}/>
      <p>input value is:{name}</p>
      <p>{count.current}</p>
    </div>
  )
}

export default Refs

