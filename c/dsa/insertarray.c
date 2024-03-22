
// #include <stdio.h>

// #define MAX 100

// int n;
// int pos;
// int val;
// int i;
// int a;
// // insert

// void insert(){
//     printf("enter the positionof an elemnt");
//     scanf("%d",&pos);
//     printf("enter the element of to be inserted");
//     scanf("%d",&pos);
//     pos=pos-1;
//     printf("enter the elemet to be inserted");
//     scanf("%d",&val);
//     for(i=n-1;i>=pos;i--){
//         // a[i]=a[i];
//         a[i+1]=a[i];
//     }
//         a[pos]=val;
//       n=n+1;

// }
 


// int main() {
//     int a[MAX]; // Declare the array in the main function

//     insert();

//     return 0;
// }



#include <stdio.h>

#define MAX 100

int n;
int pos;
int val;
int i;
// Remove the global declaration of 'a'





void insert(int a[]){
    printf("Enter the position of an element: ");
    scanf("%d", &pos);
    pos = pos - 1;
    printf("Enter the element to be inserted: ");
    scanf("%d", &val);
    for(i = n - 1; i >= pos; i--){  
          //This for loop starts from the end of the array (n - 1) and moves towards the position (pos) where the new element is to be inserted. 
             a[i + 1] = a[i];   //   It shifts each element to the right (increases the index by 1) to make room for the new element.
  
    }
    a[pos] = val;   //assigns value to the array
    n = n + 1;    //, this line increments the variable n to reflect the increased size of the array after the insertion.
}

int main() {
    int a[MAX]; // Declare the array in the main function

    // Initialize 'n' before calling insert
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    // Initialize array elements
    for (i = 0; i < n; i++) {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &a[i]);
    }

    insert(a);

    // Print the updated array
    printf("Updated array:\n");
    for (i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }

    return 0;
}

