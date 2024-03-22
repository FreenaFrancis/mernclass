import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onLocationFound }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json`);
      if (response.data.length > 0) {
        const location = response.data[0];
        onLocationFound([parseFloat(location.lat), parseFloat(location.lon)]);
      }
    } catch (error) {
      console.error('Error searching location:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
