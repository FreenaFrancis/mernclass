


// # include<stdio.h>
// #define MAX 100
// int n;
// // create
// void create(){
//     int a[MAX],i;

//     printf("enter how many elements to be stored");
//     scanf("%d", &n);
//     for(i=0;i<n;i++)
//     scanf("%d",&a[i]);
// }

// int main(){
// create();
// }




#include <stdio.h>

#define MAX 100

int n;

// create
void create(int a[]) {
    int i;

    printf("Enter how many elements to be stored: ");
    scanf("%d", &n);

    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);
}

// display
void display(int a[]) {
    printf("The array elements are:\n");
    for (int i = 0; i < n; i++)
        printf("%d\n", a[i]);
}

int main() {
    int a[MAX]; // Declare the array in the main function

    create(a);
    display(a);

    return 0;
}
