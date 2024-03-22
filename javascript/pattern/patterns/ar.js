// // function kLargestElements(arr, K) {
// //     arr.sort((a, b) => b - a); // Sort the array in descending order
// //     return arr.slice(0, K);  // Get the first K elements
// //   }
  
// //   // Input
// //   const N = 5;  // Replace with your array length
// //   const K = 2;  // Replace with K
// //   const arr = [12, 5, 787, 1, 23];  // Replace with your array
  
// //   // Find K largest elements
// //   const result = kLargestElements(arr, K);
  
// //   // Output
// //   console.log(result.join(" "));  // Print the K largest elements
  



// function findKLargestElements(arr, K) {
//     arr.sort((a, b) => b - a);  // Sort the array in descending order
//     return arr.slice(0, K);     // Get the first K elements
//   }
  
//   // Example usage:
//   const input = "5 2\n12 5 787 1 23";
//   const [N, K] = input.split('\n')[0].split(' ').map(Number);
//   const arr = input.split('\n')[1].split(' ').map(Number);
  
//   const result = findKLargestElements(arr, K);
//   console.log(result.join(' ')); // Output the K largest elements
  

// const x = [1, 24, 67, 89, 34, 10, 34, 56, 89]
// k = 10;
// if(k > x.length)
// {
//     console.log("its not possible")
// }
// else{
//     y = x.sort()
//     greatest = y.slice(-k)
//     console.log(greatest)
// }

// let x=[5,2,12,5,787,1,23];
// let y = x.sort();
// console.log(y)
// let sl=y.slice(-2);
// console.log(sl);


let x = [5, 2, 12, 5, 787, 1, 23];
let y = x.slice(); // Copy the array to avoid modifying the original
y.sort(function(a, b) {
  return a - b;
});
console.log(y);

let sl = y.slice(-3);
console.log(sl);
