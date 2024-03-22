import React, { useEffect, useState } from 'react'

function Fakeapi() {
    const[resourcetype,setResourcetype]=useState('users');
const[items, setItems] =useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
        .then(response => response.json())
        .then(json => setItems(json))
    },[resourcetype])
  return (
    <>
    <div>
      <button onClick={()=> setResourcetype('users')}>users</button>
      <button onClick={()=> setResourcetype('posts')}>post</button>
      <button onClick={()=> setResourcetype('comments')}>comments</button>
    </div>
    <h1>{resourcetype}</h1>
   {items.map(item => {
return <pre>{JSON.stringify(item)}</pre>
   })}
    </>
  )

}

export default Fakeapi
