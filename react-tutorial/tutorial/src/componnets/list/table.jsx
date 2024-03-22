import React, { useState, useEffect } from 'react';

export const TableList = () => {
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

  const tableStyle = {
    border: '1px solid #ccc',
    borderCollapse: 'collapse',
    width: '50%',
    margin: '20px 0',
  };

  const thStyle = {
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  };

  return (
    <div>
      <h1>Item List</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={tdStyle}>{item.id}</td>
              <td style={tdStyle}>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


