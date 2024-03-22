#include <stdio.h>

// Function to count occurrences of a digit (D) in a number (N)
int countDigitOccurrences(int N, int D) {
    int count = 0;

    // Loop until all digits in N are processed
    
    while (N > 0) {
        // Extract the last digit of N
        int digit = N % 10;

        // Check if the extracted digit is equal to the target digit (D)
        if (digit == D) {
            count++;  // Increment the count if they are equal
        }

        // Move to the next digit by dividing N by 10 (remove the last digit)
        N /= 10;
    }

    return count;  // Return the final count of digit occurrences
}

// Main function
int main() {
    // Example usage without prompt
    int N = 1111451;
    int D = 1;

    // Find and print the count of digit occurrences using the function
    int result = countDigitOccurrences(N, D);
    printf("%d\n", result);

    return 0;  // Indicate successful execution of the program
}
