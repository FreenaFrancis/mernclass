// Example array
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

// Using push() to add elements to the end
numbers.push(7, 8);
console.log(numbers); // [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 7, 8]

// Using pop() to remove the last element
let poppedElement = numbers.pop();
console.log(poppedElement); // 8
console.log(numbers); // [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 7]

// Using shift() to remove the first element
let shiftedElement = numbers.shift();
console.log(shiftedElement); // 3
console.log(numbers); // [1, 4, 1, 5, 9, 2, 6, 5, 3, 7]

// Using unshift() to add elements to the beginning
numbers.unshift(0, 2);
console.log(numbers); // [0, 2, 1, 4, 1, 5, 9, 2, 6, 5, 3, 7]

// Using slice() to create a new array from a portion of the original array
let slicedArray = numbers.slice(2, 6);
console.log(slicedArray); // [1, 4, 1, 5]

// Using map() to square each element of the array

let squaredArray = numbers.map(num => num * num);
console.log(squaredArray); // [0, 4, 1, 16, 1, 25, 81, 4, 36, 25, 9, 49]

// Using filter() to get even numbers from the array
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [0, 4, 16, 4, 36]

// Using reduce() to calculate the sum of all elements in the array
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 201


// Using find() to find the first even number in the array
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 0

// Using indexOf() to find the index of a specific element
let index = numbers.indexOf(5);
console.log(index); // 5

// Using isArray() to check if a variable is an array
let isArray = Array.isArray(numbers);
console.log(isArray); // true



//////////////////////////////////////////////////////

const numbers1 = [1, 2, 3, 4, 5];


numbers.splice(2, 2, 6);

console.log(numbers1);
