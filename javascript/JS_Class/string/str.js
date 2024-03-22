// Original string
const text = "   Hello, world!   ";

// length: Returns the length of the string
const length = text.length;
console.log(length); // Output: 17

// toUpperCase(): Converts the string to uppercase
const uppercaseText = text.toUpperCase();
console.log(uppercaseText); // Output: "   HELLO, WORLD!   "

// toLowerCase(): Converts the string to lowercase
const lowercaseText = text.toLowerCase();
console.log(lowercaseText); // Output: "   hello, world!   "

// charAt(index): Returns the character at a specified index
const character = text.charAt(4);
console.log(character); // Output: "o"

// indexOf(substring): Finds the index of the first occurrence of a substring
const index = text.indexOf("world");
console.log(index); // Output: 9

// lastIndexOf(substring): Finds the index of the last occurrence of a substring
const lastIndex = text.lastIndexOf("world");
console.log(lastIndex); // Output: 9

// substring(startIndex, endIndex): Extracts a portion of the string
const substring = text.substring(3, 8);
console.log(substring); // Output: "lo, w"

// slice(startIndex, endIndex): Extracts a portion of the string
const sliced = text.slice(3, 8);
console.log(sliced); // Output: "lo, w"

// split(separator): Splits the string into an array based on a separator
const splitArray = text.split(",");
console.log(splitArray); // Output: ["   Hello", " world!   "]

// replace(old, new): Replaces the first occurrence of a substring
const replacedText = text.replace("world", "universe");
console.log(replacedText); // Output: "   Hello, universe!   "

// replaceAll(old, new): Replaces all occurrences of a substring
const replacedAllText = text.replaceAll("l", "L");
console.log(replacedAllText); // Output: "   HeLLo, word!   "

// trim(): Removes leading and trailing whitespace
const trimmedText = text.trim();
console.log(trimmedText); // Output: "Hello, world!"

// startsWith(substring): Checks if the string starts with a substring
const startsWithHello = text.startsWith("Hello");
console.log(startsWithHello); // Output: true

// endsWith(substring): Checks if the string ends with a substring
const endsWithWorld = text.endsWith("world!");
console.log(endsWithWorld); // Output: true
