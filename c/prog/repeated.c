#include <stdio.h>

int countDigitOccurrences(int N, int D) {
    int count = 0;

    // Iterate through each digit by continuously dividing by 10
    while (N > 0) {
        // Get the rightmost digit
        int digit = N % 10;

        // Check if the digit is equal to D
        if (digit == D) {
            count++;
        }

        // Remove the rightmost digit by integer division
        N /= 10;
    }






    

    return count;
}

int main() {
    // Example usage without prompt
    int N = 1111451;
    int D = 1;

    // Find and print the count of digit occurrences
    int result = countDigitOccurrences(N, D);
    printf("%d\n", result);

    return 0;
}
