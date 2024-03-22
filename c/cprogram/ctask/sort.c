#include <stdio.h>

int is_sorted_ascending(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return 0; // Not sorted in ascending order
        }
    }
    return 1; // Sorted in ascending order
}

int main() {
    int arr[] = {1, 2, 3, 5, 4};
    int size = sizeof(arr) / sizeof(arr[0]);
    printf("Is the array sorted in ascending order? %s\n", is_sorted_ascending(arr, size) ? "Yes" : "No");
    return 0;
}
