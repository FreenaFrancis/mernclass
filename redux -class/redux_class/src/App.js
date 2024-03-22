import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './features/counterSlice';


import Forms from './components/Form';



function App() {
  // Access the 'count1' property of the 'counter' state
  const { count1 } = useSelector((state) => state.counter);
const {name}=useSelector((state=>state.form))
const dispatch=useDispatch()

  return (
    <div className="App">
      <h2>count: {count1}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>

     <Forms/>
     <p>name:{name}</p>
    </div>
  );
}


export default App;



// npm i @reduxjs/toolkit react-redux