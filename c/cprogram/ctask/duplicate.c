#include <stdio.h>

void remove_duplicates(int arr[], int *size) {
    int uniqueIndex = 0;
    for (int i = 1; i < *size; i++) {
        if (arr[i] != arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }
    *size = uniqueIndex + 1;
}

int main() {
    int arr[] = {1, 2, 2, 3, 4, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    remove_duplicates(arr, &size);
    
    printf("Array after removing duplicates: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    
    return 0;
}
