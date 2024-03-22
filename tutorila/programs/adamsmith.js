function missingElement(N, M, A, B) {
    // Use filter to find elements in A that are not present in B
    const missingElements = A.filter(element => !B.includes(element));

    return missingElements;
}

// Example usage:

const A = [10, 20, -1, 3, 4];
const B = [45, 10, 11, -1, 7, 3];

// Output
const result = missingElement(N, M, A, B);
console.log(result);
