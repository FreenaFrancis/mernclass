function isArmstrongNumber(number) {
    // Convert the number to a string to get its digits
    const numString = number.toString();

    // Get the number of digits
    const numDigits = numString.length;

    // Calculate the sum of each digit raised to the power of the number of digits
    const sum = numString.split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);

    // Check if the sum is equal to the original number
    return sum === number;
}

// Example usage:
const num = 154;
if (isArmstrongNumber(num)) {
    console.log(`${num} is an Armstrong number.`);
} else {
    console.log(`${num} is not an Armstrong number.`);
}
