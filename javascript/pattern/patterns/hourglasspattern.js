// // hour galss pyramid

// let n = 5;
// let string = "";
// // Reversed pyramid pattern
// for (let i = 0; i < n; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < (n - i) * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // pyramid pattern
// for (let i = 2; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********



// Right pascal pattern

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < n - i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *