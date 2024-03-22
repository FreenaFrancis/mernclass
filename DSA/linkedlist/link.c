#include <stdio.h>
#include <stdlib.h>

// Define the structure for a node in the linked list
struct Node {
    int data;
    struct Node* next;
};

// Define a type alias for struct Node as node
typedef struct Node node;

// Declare a global variable for the head of the linked list
node* head = NULL;

// Function to append a new node at the end of the linked list
void append() {
    node* temp = (node*)malloc(sizeof(node));
    if (temp == NULL) {
        printf("Out of memory\n");
        return;
    }

    printf("Enter the node data: ");
    scanf("%d",&temp->data);
    temp->next = NULL;

    if (head == NULL) {
        head = temp;
    } else {
        node* p = head;
        while (p->next != NULL) {
            p = p->next;
        }
        p->next = temp;
    }
}

// Function to add data at the beginning of the linked list
void addDataBeginning() {
    int val;
    printf("Enter the value to insert: ");
    scanf("%d", &val);

    node* newNode = (node*)malloc(sizeof(node));
    if (newNode == NULL) {
        printf("Out of memory\n");
        return;
    }

    newNode->data = val;
    newNode->next = head; // Point the new node to the current head
    head = newNode;       // Update the head to the new node
    printf("Inserted %d at the beginning\n", val);
}

// Function to add data after a specific node in the linked list
void addDataAfter() {
    int loc, i = 1;
    node* temp;
    printf("Enter the location: ");
    scanf("%d", &loc);

    int len = length();

    if (loc > len) {
        printf("Invalid location\n");
    } else {
        temp = head;
        while (i < loc) {
            temp = temp->next;
            i++;
        }

        node* newNode = (node*)malloc(sizeof(node));
        if (newNode == NULL) {
            printf("Out of memory\n");
            return;
        }

        printf("Enter the data: ");
        scanf("%d", &newNode->data);

        newNode->next = temp->next;
        temp->next = newNode;
    }
}

// Function to calculate the length of the linked list
int length() {
    int count = 0;
    node* temp = head;
    while (temp != NULL) {
        count++;
        temp = temp->next;
    }
    return count;
}

// Function to display the linked list
void display() {
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }

    node* temp = head;
    printf("Elements in the list are: ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

// Function to delete a node from the linked list
void deleteNode() {
    int loc;
    printf("Enter the location to delete: ");
    scanf("%d", &loc);

    if (loc > length()) {
        printf("Invalid location\n");
    } else if (loc == 1) {
        node* temp = head;
        head = temp->next;
        temp->next = NULL;
        free(temp);
    } else {
        node* p = head;
        node* q;
        int i = 1;
        while (i < loc - 1) {
            p = p->next;
            i++;
        }
        q = p->next;
        p->next = q->next;
        q->next = NULL;
        free(q);
    }
}

int main() {
    int ch;
    while (1) {
        printf("Single linked list operations\n");
        printf("1. Append\n");
        printf("2. Add data at the beginning\n");
        printf("3. Add data after\n");
        printf("4. Length\n");
        printf("5. Display\n");
        printf("6. Delete\n");

        printf("7. Quit\n");

        printf("Enter the choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                append();
                break;
            case 2:
                addDataBeginning();
                break;
            case 3:
                addDataAfter();
                break;
            case 4:
                printf("Length: %d\n", length());
                break;
            case 5:
                display();
                break;
            case 6:
                deleteNode();
                break;
            case 7:
                exit(0);
            default:
                printf("Invalid choice\n");
        }
    }

    return 0;
}
