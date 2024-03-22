import React, { useState } from 'react';

const initialItems = [
  { id: 1, title: 'Item 1', category: 'Category A' },
  { id: 2, title: 'Item 2', category: 'Category B' },
  { id: 3, title: 'Item 3', category: 'Category A' },
  // Add more items with different categories
];

const Tablefilter = () => {
  const [items] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const uniqueCategories = ['All', ...new Set(items.map((item) => item.category))];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h1>Item List</h1>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <table style={{ border: '1px solid #ccc', borderCollapse: 'collapse', width: '50%', margin: '20px 0' }}>
        <thead>
          <tr style={{ border: '1px solid #ccc', backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'left' }}>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Title</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id} style={{ border: '1px solid #ccc' }}>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{item.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{item.title}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablefilter;
