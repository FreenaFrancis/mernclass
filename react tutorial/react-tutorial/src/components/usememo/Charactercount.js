import React, { useRef } from 'react';

function CharacterCounter() {
  const inputRef = useRef(null);
  const characterCount = useRef(0);

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    characterCount.current = inputValue.length;
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
      />
      <p>Input: {inputRef.current && inputRef.current.value}</p>
      <p>Character Count: {characterCount.current}</p>
    </div>
  );
}

export default CharacterCounter;
