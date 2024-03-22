// Define an array of numbers
// const numbers = [1, 2, 3, 4, 5];

// // Use the reduce method to calculate the sum of all numbers in the array

// const sum = numbers.reduce(function(accumulator, currentValue) {  //we have an function called reducer called sum which accepts 2 parameters ie, accumulator and currentvalue
//   return accumulator + currentValue;  //returns a single value on submission of 2 prametrs
// }, 0);

// console.log("Sum:", sum);
//

import React, { useReducer } from 'react'

const initialState = 0 // ee parameter ennai declare chaiyanam, ie, set the initial value as 0
const reducer = (state, action)=>{

// ee reducer function accepts current state and action and returns new state depending on the particular action

switch(action){
    case 'increment':
        return state+1
        case 'decrement':
            return state-1
            case 'reset':
                return initialState
                default:
                    return state
}
}

function CounterOne() {
    // useReducer(reducer,initialState)  //here the usereduce hook accept two parameters ie, reducer and initialstate
 
 const [count,dispatch] = useReducer(reducer,initialState) //here, the call to use reducer returns 2 value, count ie, the current value and dispatch is capable of accepting the action to execute the code specified in the render function
 //we use dispatch method to dispatch the appropriate action based on what button the user clicks
    return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne
