#include <stdio.h>

int main() {
    int arr[] = {5, 7, 7, 8, 8, 10};
    int size = sizeof(arr) / sizeof(arr[0]);
    int x = 8;

    int first = -1;
    int last = -1;

    for (int i = 0; i < size; i++) {
        if (arr[i] == x) {
            if (first == -1) {
                first = i;
            }
            last = i;
        }
    }

    if (first != -1) {
        printf("First Occurrence = %d\nLast Occurrence = %d\n", first, last);
    } else {
        printf("-1,-1\n");
    }

    return 0;
}
