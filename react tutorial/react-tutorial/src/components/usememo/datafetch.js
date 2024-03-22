import React, { useState, useEffect } from 'react';

function DataFetching() {
  const [data, setData] = useState([]);
const [item, setItem] = useState()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [data]); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetching