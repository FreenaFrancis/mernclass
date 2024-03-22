// Original array
let fruits = ['apple', 'banana', 'orange', 'kiwi'];

// Mutator methods (modify the original array)

// push(): Adds elements to the end of the array
fruits.push('strawberry');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'kiwi', 'strawberry']

// pop(): Removes the last element
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: 'strawberry'
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'kiwi']

// shift(): Removes the first element
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'orange', 'kiwi']

// unshift(): Adds elements to the beginning of the array
fruits.unshift('grape', 'watermelon');
console.log(fruits); // Output: ['grape', 'watermelon', 'banana', 'orange', 'kiwi']

// splice(): Modifies the array by adding/removing elements
fruits.splice(2, 0, 'cherry', 'pear'); // Adds 'cherry' and 'pear' at index 2
console.log(fruits); // Output: ['grape', 'watermelon', 'cherry', 'pear', 'banana', 'orange', 'kiwi']

// Accessor methods (do not modify the original array)

// concat(): Combines two arrays without modifying the originals
let vegetables = ['carrot', 'celery'];
let combined = fruits.concat(vegetables);
console.log(combined); // Output: ['grape', 'watermelon', 'cherry', 'pear', 'banana', 'orange', 'kiwi', 'carrot', 'celery']

// join(): Converts array elements to a string with a specified separator
let fruitString = fruits.join(' | ');
console.log(fruitString); // Output: 'grape | watermelon | cherry | pear | banana | orange | kiwi'

// slice(): Creates a new array with a portion of the original array
let subArray = fruits.slice(2, 5); // Elements from index 2 to 4
console.log(subArray); // Output: ['cherry', 'pear', 'banana']

// indexOf(): Finds the index of a specified element
let index = fruits.indexOf('orange');
console.log(index); // Output: 5

// lastIndexOf(): Finds the last index of a specified element
let lastIndex = fruits.lastIndexOf('banana');
console.log(lastIndex); // Output: 4

// Iteration methods

// forEach(): Iterates through each element
fruits.forEach(fruit => console.log(fruit));

// map(): Creates a new array with modified elements
let fruitLengths = fruits.map(fruit => fruit.length);
console.log(fruitLengths);

// filter(): Creates a new array with elements that pass a test
let filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits);

// reduce(): Reduces the array to a single value using a function
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength);

// some(): Checks if at least one element meets a condition
let hasLongFruit = fruits.some(fruit => fruit.length > 7);
console.log(hasLongFruit);

// every(): Checks if all elements meet a condition
let allFruitsHaveVowels = fruits.every(fruit => /[aeiou]/.test(fruit));
console.log(allFruitsHaveVowels);

// find(): Returns the first element that meets a condition
let longFruit = fruits.find(fruit => fruit.length > 6);
console.log(longFruit);

// findIndex(): Returns the index of the first element that meets a condition
let indexLongFruit = fruits.findIndex(fruit => fruit.length > 6);
console.log(indexLongFruit);

// Utility method

// isArray(): Checks if a value is an array
console.log(Array.isArray(fruits)); // Output: true
