#include <stdio.h>

int max_element(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    int arr[] = {1, 3, 5, 2, 4};
    int size = sizeof(arr) / sizeof(arr[0]);
    printf("Maximum element in the array: %d\n", max_element(arr, size));
    return 0;
}
