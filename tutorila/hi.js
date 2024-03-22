
// comments
// variables nn parayunnathu data value store chaiyannunna oru container annu

// 4 types to declare variables

// var,let,const or varaiblesie x=5

// const- cannot change

//js in invented 1995, on beginning

// differencce btw var and let is that if we use 

// var x=5;
// var x= 6
// it can change the value 
// but in case of let

// let x=5;  let x=6it will print error

// let x=5;  x=6


// rules for initilaization

// unique,underscores,digits,dollar - only withany of these we can be in variable

// predefined words cant be used



// /////////////////////////////////////////////////////////////////////////////////////////

// Datatypes

// data types can be 2 types primitive and non-primitive


// primitive - Number,string,booean,null,undefineed,sympols

// non-primitive-objects

// number-without decimals-positive and negative
// float-with decimals -positive and negative
// string- ',"'
// typeo- to chek datatype


var x ="Hello World";
console.log(x);

// to print the world only instrings

var xy="Hello\"world\"";
console.log(xy);

// to print in new line

var y= "hello \n world";
console.log(y);

// to give extra space use \t

var z = "hello \t world";
console.log(z);

// Boolean-to check true  or false

// undefined eg- 

let u;
console.log(typeof(u));

// null -
let v= null;
console.log(v);

// type conversion- to convert one dataytype inito another

let c= 6;
console.log(typeof(c));
let d= String(c);

console.log(typeof(d));


// type cohersion 
// if we add string and number we get string
// if we minus string and number we get number
let f;
// console.log(typeof(f));
 f= 8;
// console.log(typeof(f));

 f= f-"heello";
console.log(typeof(f));


console.log('5'-'2');

// let a = null;
console.log(typeof(null));



// function printOddNumberPattern(n) {
//     for (let i = 1; i <= n; i++) {
//       let row = '';
//       for (let j = 1; j <= i; j++) {
//         const oddNumber = 2 * j - 1;
//         row += oddNumber + ' ';
//       }
//       console.log(row);
//     }
//   }
  
//   printOddNumberPattern(5); // Change the argument to specify the number of rows you want

  

// Define the number of rows for the pyramid
// const numRows = 3;

// for (let i = 1; i <= numRows; i++) {
//     // Create a string to hold the row
//     let row = "";

//     // Add spaces for alignment
//     for (let j = 1; j <= numRows - i; j++) {
//         row += " ";
//     }

//     // Add the odd number 'i' multiple times
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += i;
//     }

//     // Output the row
//     console.log(row);
// }

function createOddNumberPyramid(numRows) {
    for (let i = 1; i <= numRows; i++) {
      // Create a string to hold the row
      let row = "";
  
      // Add spaces for alignment
      for (let j = 1; j <= numRows - i; j++) {
        row += " ";
      }
  
      // Add the odd number 'i' multiple times
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += i;
      }
  
      // Output the row
      console.log(row);
    }
  }
  
  // Call the function with the number of rows you want
  createOddNumberPyramid(3);
  