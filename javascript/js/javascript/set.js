// Create a new Set
const mySet = new Set();
let myset = [1,2,3,4,5]
// Add elements to the Set
mySet.add(5);
mySet.add("Hello");
mySet.add({ name: "John", age: 30 });

// Check the size of the Set
console.log("Size of the Set:", mySet.size); // Output: 3

// Add duplicate elements (will be ignored)
mySet.add(5);
mySet.add("Hello");

// Check the size again (duplicates were ignored)
console.log("Size of the Set:", mySet.size); // Output: 3

// Check if an element exists in the Set
console.log("Has 'Hello':", mySet.has("Hello")); // Output: true
console.log("Has 10:", mySet.has(10)); // Output: false

// Delete an element from the Set
mySet.delete("Hello");

// Check the size after deleting an element
console.log("Size of the Set:", mySet.size); // Output: 2

// Iterate through the elements of the Set using a forEach loop
mySet.forEach(item => {
    console.log("Set item:", item);
});

// Clear all elements from the Set
mySet.clear();

// Check the size after clearing the Set
console.log("Size of the Set:", mySet.size); // Output: 0
