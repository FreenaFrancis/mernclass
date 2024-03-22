import React, { useEffect, useState } from 'react'

function FetchApi() {
const [data,setData]=useState([])
useEffect(()=>{
 fetch(`https://jsonplaceholder.typicode.com/users`)
 .then(response => response.json()) // Parse the response as JSON
      .then(data => setData(data))
 .catch((err)=>console.log(err))


},[])

  return (
    <div className='p-5 bg-light'>
      <div className='bg-white shadow border'>
<table className='table'>
    <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
    </thead>
    <tbody>
        {data.map((datas,index)=>(
<tr key={index}>
    <td>{datas.id}</td>
    <td>{datas.name}</td>
    <td>{datas.email}</td>
    <td>{datas.phone}</td>

</tr>
        ))}
    </tbody>
</table>
      </div>
    </div>
  )
}

export default FetchApi
