import React, { useState, useEffect } from 'react';

 export const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulated API call or data fetching
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run this effect once on component mount

  return (
    <div>
      <h1>Item List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


