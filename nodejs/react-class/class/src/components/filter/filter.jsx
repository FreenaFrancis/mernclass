import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Filters() {
  const [data, setData] = useState([]);
  const[records,setRecords]=useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res.data)
        setRecords(res.data);
    })
      .catch(err => console.log(err));
  }, []); // Add an empty dependency array to run the effect only once


  
  const filterData =(e)=>{
setRecords(data.filter(f => f.email.toLowerCase().includes(e.target.value)))
  }
  return (
    <div className='p-5 bg-light'>
      <div className='bg-white shadow border'>
        <input type='text' className='form-control' onChange={filterData} placeholder='Search'></input>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
           
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Filters;
