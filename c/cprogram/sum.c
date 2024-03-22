#include <stdio.h>

int main() {
    int N = 4;
    int arr[] = {1, 5, 7, 1};
    int K = 6;
    int count = 0;

    for (int i = 0; i < N; i++) {
        for (int j = i + 1; j < N; j++) {
            if (arr[i] + arr[j] == K) {
                count++;
            }
        }
    }

    printf("%d\n", count);

    return 0;
}
