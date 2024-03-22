// // Edit.js
// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';

// function Edit() {
//   const { id } = useParams();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState();

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setName(data.name);
//         setEmail(data.email);
//         setPhone(data.phone);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleUpdate = () => {
//     const updatedItem = { name, email, phone };
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedItem),
//     })
//       .then(() => {
//         // After the update, you can navigate back to the list page.
//         window.history.back();
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <h2>Edit Item</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Phone"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />
//      <Link to={'/crud'}><button onClick={handleUpdate}>Update</button></Link> 
//     </div>
//   );
// }

// export default Edit;


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const data = response.data;
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = () => {
    const updatedItem = { name, email, phone };
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedItem)
      .then(() => {
        // After the update, you can navigate back to the list page.
        // window.history.back();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Link to="/crud">
        <button onClick={handleUpdate}>Update</button>
      </Link>
    </div>
  );
}

export default Edit;
