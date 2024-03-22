// function findPairsWithSum(arr, N, K) {
//     let count = 0;

//     for (let i = 0; i < N; i++) {
//         for (let j = i + 1; j < N; j++) {
//             if (arr[i] + arr[j] === K) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// // Example Input
// let N = 4;
// let arr = [1, 5, 7, 1];
// let K = 6;

// // Output
// let result = findPairsWithSum(arr, N, K);
// console.log(result);


// //////////////////////////////or//////////////////////////////////

let N = 4;
let arr = [1, 5, 7, 1];
let K = 6;
let count = 0;

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        if (arr[i] + arr[j] === K) {
            count++;
        }
    }
}


console.log(count);

