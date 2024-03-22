
// ///////////////////////////////////////////////////////////////////////////
// Math mehthods
const num = -5;
const absNum = Math.abs(num);
console.log(`Absolute value of ${num} is ${absNum}`);

const a = 5.1;
const roundedNum = Math.round(a);
console.log(`Rounded value of ${a} is ${roundedNum}`);
// This function rounds a number up to the nearest integer, 
// regardless of its decimal value. It's used with the number 5.67.


const b = 5.67;
const ceilNum = Math.ceil(b);
console.log(`Ceiling value of ${b} is ${ceilNum}`);

const c = 5.67;
const floorNum = Math.floor(c);
console.log(`Floor value of ${c} is ${floorNum}`);

const d = 5.67;
const ceilNu = Math.ceil(d);
console.log(`Ceiling value of ${d} is ${ceilNu}`);

const randomNum = Math.random();
console.log(`Random number between 0 and 1: ${randomNum}`);

const maxNum = Math.max(10, 20, 5);
console.log(`Maximum value among 10, 20, and 5 is ${maxNum}`);

const minNum = Math.min(10, 20, 5);
console.log(`Minimum value among 10, 20, and 5 is ${minNum}`);

const result = Math.sqrt(25);
console.log(`Square root of 25 is ${result}`);

const piValue = Math.PI;
console.log(`The value of pi (π) is approximately ${piValue}`);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Number method

const numStr = "3.14";
const parsedFloat = Number.parseFloat(numStr);
console.log(`Parsed floating-point number from "${numStr}" is ${parsedFloat}`);

const str = "1010";
const parsedInt = Number.parseInt(str, 2);
console.log(`Parsed integer from binary string "${str}" is ${parsedInt}`);

const n=2





// const isNaNCheck = Number.isNaN("vgsv");
// console.log(`Is "Not a number" NaN? ${isNaNCheck}`);
console.log(isNaN(n));

const isFiniteCheck = Number.isFinite(42);
console.log(`Is 42 finite? ${isFiniteCheck}`);

const isIntegerCheck = Number.isInteger(7.0);
console.log(`Is 7.0 an integer? ${isIntegerCheck}`);

const e = 3.14159265359;
const formattedNum = e.toFixed(2);
console.log(`Formatted number: ${formattedNum}`);

const f = 123.456789;
const formattedNu = f.toPrecision(4);
console.log(`Formatted number with precision 4: ${formattedNu}`);

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formattedAmount = formatter.format(1000);
console.log(`Formatted currency: ${formattedAmount}`);
