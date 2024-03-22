// 7,6,10,5,9,2,1,15,7

// p=7

// 7,6,7,5,9,2,1,15,10

// 7,6,7,5,1,2, 9,15,10

// 2,6,7,5,1,  7  9,15,10
#include <stdio.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[low];
    int start = low;
    int end = high;

    while (start < end) {
        while (arr[start] <= pivot) {
            start++;
        }

        while (arr[end] > pivot) {
            end--;
        }

        if (start < end) {
            swap(&arr[start], &arr[end]);
        }
    }

    swap(&arr[low], &arr[end]);
    return end;
}

void quick_sort(int arr[], int low, int high) {
    if (low < high) {
        int loc = partition(arr, low, high);
        quick_sort(arr, low, loc - 1);
        quick_sort(arr, loc + 1, high);
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {7, 6, 10, 5, 9, 2, 1, 15, 7};
    int size = sizeof(arr) / sizeof(arr[0]);

    printf("Given array is:\n");
    printArray(arr, size);

    quick_sort(arr, 0, size - 1);

    printf("\nSorted array is:\n");
    printArray(arr, size);

    return 0;
}
