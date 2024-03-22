function calculateOutput(nums) {
    const n = nums.length;

    // Calculate the total sum of the array
    const totalSum = nums.reduce((sum, num) => sum + num, 0);

    // Initialize an array to store the output
    const output = [];

    // Calculate the sum of the remaining elements for each element in the array
    for (let i = 0; i < n; i++) {
        output.push(totalSum - nums[i]);
    }

    return output;
}

// Example usage:
const n = 4;
const nums = [4, 3, 2, 10];

// Output
const result = calculateOutput(nums);
console.log(result.join(' '));
