import React, { useEffect, useState } from 'react';

const GoldPriceComponent = () => {
  const [goldData, setGoldData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://gold-price6.p.rapidapi.com/GetGold';
      const params = new URLSearchParams({ CUR: 'INR' });

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'be621a4df4msh6a7a99990e5e26ap18018djsnff03572bb822',
          'X-RapidAPI-Host': 'gold-price6.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(`${url}?${params}`, options);
        const result = await response.json();
        setGoldData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <div>
      <h1>Gold Price Data</h1>
      {goldData ? (
        <pre>{JSON.stringify(goldData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GoldPriceComponent;
