// import React, { useState, useEffect } from 'react';

// function SimpleEffectExample() {
//   const [count, setCount] = useState(0);

//   // useEffect with no dependencies
//   useEffect(() => {
//     // This function will run after every render
//     console.log('Effect ran!');

//     // You can perform any side effects here

//     // Cleanup function (optional)
//     // return () => {
//     //   console.log('Cleanup ran!');
//     //   // You can perform any cleanup here
//     // };
//   },[]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default SimpleEffectExample;


// import React, { useEffect, useState } from 'react'

// function Effect() {
//   const [count,setCount]=useState(0);

//   const increment=(e)=>{
// e.preventDefault();
// setCount(count+1)
//   }

//   useEffect(()=>{
//     console.log('hello');
//   },[])
//   return (
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// export default Effect


import React, { useEffect, useState } from 'react'

function Effect() {
 
  const[count,setCount]=useState(0)

  useEffect(()=>{   
console.log("hi");
  },[])   //depencies

  const handleincrement=(e)=>{
    e.preventDefault();
    setCount(count+1)
  }

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleincrement}>increment</button>
    </div>
  )
}

export default Effect
