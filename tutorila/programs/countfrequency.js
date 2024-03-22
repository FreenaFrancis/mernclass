// function countDigitOccurrences(N, D) {
//     const digitString = D.toString();
//     const numberString = N.toString();
    
//     let count = 0;

//     for (let i = 0; i < numberString.length; i++) {
//         if (numberString.charAt(i) === digitString) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage without prompt
// const N = 111145;
// const D = 1;

// // Find and print the count of digit occurrences
// const result = countDigitOccurrences(N, D);
// console.log(result);


function countDigitOccurrences(N, D) {
    const count = N.toString().split(D.toString()).length - 1;
    return count;
}

// Example usage without prompt
const N = 1111451;
const D = 1;

// Find and print the count of digit occurrences
const result = countDigitOccurrences(N, D);
console.log(result);

