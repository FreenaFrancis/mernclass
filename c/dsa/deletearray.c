



#include <stdio.h>
#define MAX 100

int n;
int pos;
int val;

void deleteElement(int a[]) {
    printf("Enter the position of the element to be deleted: ");
    scanf("%d", &pos);

   

    pos = pos - 1; // Adjust position to array index
    val = a[pos];

    for (int i = pos; i < n - 1; i++) {
        a[i] = a[i + 1];
    }

    n = n - 1;

    printf("Deleted element is %d\n", val);
}

int main() {
    int a[MAX];
    
    printf("Enter the size of an array: ");
    scanf("%d", &n);

    // Initialize array elements
    for (int i = 0; i < n; i++) {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &a[i]);
    }

    // Print the updated array
    printf("Updated array:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }

    deleteElement(a);

    return 0;
}
