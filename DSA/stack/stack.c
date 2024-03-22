#include <stdio.h>
#include <limits.h>

#define MAX_SIZE 20

int arr[MAX_SIZE];
int top = -1;

void push(int val) {
    if (top == MAX_SIZE - 1) {
        printf("Stack is full\n");
        return;
    }
    top++;
    arr[top] = val;
}

int pop() {
    if (top == -1) {
        printf("Stack is empty\n");
        return INT_MIN;
    }
    return arr[top--];    
}

void peek() {

    if (top == -1) {
        printf("Stack is empty\n");
        return INT_MIN;
    }
    return arr[top];
}

void display() {
    if (top == -1) {
        printf("Stack is empty\n");
        return;
    }
    printf("Stack elements: ");
    for (int i = 0; i <= top; i++) {
        printf("%d ", arr[i]);
    }
   
}

int main() {
    push(5);
    push(7);
    push(8);
    display();
  

    printf("Popped: %d\n", pop());
    display();
    peek();
    return 0;
}
