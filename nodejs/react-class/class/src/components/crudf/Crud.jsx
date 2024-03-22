




// // Crud.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Crud() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleDelete = (id) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         const deletedData = data.filter((item) => item.id !== id);
//         setData(deletedData);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <h1>CRUD Example</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.phone}</td>
//               <td>
//                 <Link to={`/edit/${item.id}`}>Edit</Link>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Crud;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Crud() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>CRUD Example</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <Link to={`/edit/${item.id}`}>Edit</Link>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Crud;
