// let arr = [5,7,7,8,8,10];
// let n = arr.length;
// let x = 8;

// let first = -1;
// let last = -1;

// for (let i = 0; i < n; i++) {
//     if (x !== arr[i]) {
//         continue;
//     }
//     if (first === -1) {
//         first = i;
//     }
//     last = i;
// }

// if (first !== -1) {
//     console.log("First Occurrence =", first, "\nLast Occurrence =", last);
// } else {
//     console.log("Not Found");
// }


let arr = [5, 8,7, 7,  8, 10];
let x = 6;

let first = arr.indexOf(x);
let last = arr.lastIndexOf(x);

if (first !== -1) {
    console.log("First Occurrence =", first, "\nLast Occurrence =", last);
} else {
    console.log("-1,-1");
}
