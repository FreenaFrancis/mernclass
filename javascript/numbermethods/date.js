const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());

const customDate = new Date(2023, 8, 6); // September 6, 2023
console.log(customDate.toDateString());


// Create a new Date object
const myDate = new Date();
// Set the year (e.g., 2023)
console.log(myDate.setFullYear(2024));
 console.log(myDate.toDateString()); // Output: "Mon Sep 06 2023" (Month and day remain unchanged)


// another format

// Create a new Date object
// const myDate = new Date();

// Set the year to 2024
myDate.setFullYear(2024);

// Format the date into a readable format
const formattedDate = myDate.toLocaleDateString(); // Adjust options if needed

console.log(formattedDate); // Output the formatted date
