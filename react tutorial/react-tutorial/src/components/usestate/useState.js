import React, { useState } from 'react';

function usCounter() {
  // The useState hook takes an initial state value as an argument
  // and returns an array with two elements: the current state and a function to update the state.
  const [count, setCount] = useState(0);

  // You can access the current state value (count) and update it using the setCount function.
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default usCounter;
