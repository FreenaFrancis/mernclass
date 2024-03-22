// //string length

// let text = "ASDGGHHHJHJHJR";
// let length = text.length;
// console.log(length);

// // uppercase and lowercase

// let word="hello world";
// let uppercase = word.toUpperCase();
// let lowercase = word.toLowerCase();
// console.log(uppercase);
// console.log(lowercase);

// //charAt

// const myString = "Hello, World!";
// const char = myString.charAt(7);
// console.log(char);  // Output: "W"

//substr and subString

const my = "Hello, World!";
const substring = my.substring(7, 12);  // Index 7 to 11
const substr = my.substr(7, 5);         // Start at index 7, length 5
console.log(substring);  // Output: "World"
console.log(substr);     // Output: "World"

//replace
const re= "Hello, World!";
const replaced = re.replace("Hello", "Hi");
console.log(replaced);  // Output: "Hi, World!"

//split
const sp = "Hello, World!";
const words = sp.split(", ");
console.log(words);  // Output: ["Hello", "World!"]

//

const wi = "Hello, World!";
const startsWithHello = wi.startsWith("Hello");
const endsWithWorld = wi.endsWith("World!");
console.log(startsWithHello);  // Output: true
console.log(endsWithWorld);    // Output: true

//trim

const tr = "   Hello, World!   ";
const trimmed = tr.trim();
console.log(trimmed);  // Output: "Hello, World!"

//slice
let name = "Anjali";
console.log(name.slice(2,4));
console.log(name.slice(2));

//concat

let fn="freena";
let ln="francis";
console.log(fn.concat(ln));
console.log(fn + ln);

//split
let sita = "the world is so beautiful "
console.log(sita.split(" "));


