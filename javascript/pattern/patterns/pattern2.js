let row=5;

for (let i = 5; i >= 1; i--) {
    let rows = "";
    for (let j = 1; j <= i; j++) {
      rows += i;
    }
    console.log(rows);
  }

// // 55555
// // 4444
// // 333
// // 22
// // 1


// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);


// // *****
// // *   *
// // *   *
// // *   *
// // *****


// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// *
// **
// ***
// ****
// *****


let n = 6;
let string = "";

for (let i = 1; i <= n; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if(i === n) {
      string += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);

// *
// **
// * *
// *  *
// *   *
// ******