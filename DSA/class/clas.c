#include <stdio.h>
#include <stdlib.h>

#define MAX 100

int a[MAX];
int n;
int i;

// Array create
void create() {
    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }
}

// Display
void display() {
    printf("Entered array elements are: ");
    for (i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");
}

// insert  [2,3,5,6,6]
3-
void insert(){
int pos, val;
printf("Position to be inserted: ");
scanf("%d",&pos);
if(pos<1||pos>n+1){
printf("invalid position");
return;
}


printf("enter the value to insert:");
scanf("%d",&val);
pos=pos-1;
for(int i=n-1;i>=pos;i--){
    a[i+1]=a[i];   //
}

a[pos]=val;
n=n+1;
printf("element is inserted");

}

// delete

void delete(){
int pos, val;
printf("enter the position to be deleted");
scanf("%d",&pos);
if(pos<1||pos>n+1){
printf("invalid position");
return;
}
pos=pos-1;
val=a[pos];
for(int i=pos;i<n-1;i++){
    a[i]=a[i+1];  
}
n=n-1;
    printf("deleted element is ")
}

int main() {
    int ch;
    while (1) {
        printf("Array operations\n");
        printf("1. Create\n");
        printf("2. Display\n");
        printf("3. Insert\n");
        printf("4. Delete\n");
        printf("5. Search\n");
        printf("6. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                create();
                break;
            case 2:
                display();
                break;
            // Implement cases 3, 4, and 5 for insert, delete, and search operations
            case 3:
                printf("Insert function not implemented yet.\n");
                break;
            case 4:
                printf("Delete function not implemented yet.\n");
                break;
            case 5:
                printf("Search function not implemented yet.\n");
                break;
            case 6:
                exit(0);
            default:
                printf("Wrong choice\n");
        }
    }
    return 0;
}
