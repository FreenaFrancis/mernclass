#include<stdio.h>
#include<stdlib.h>
#include<limits.h>

struct lnode{ //multiple data enter chaiyan
    int data;
    struct lnode* next;
};

typedef struct lnode node;  //oro pravisham lnode nn vilikathae node nn thannae vilikan vendi typedef

//evidea head pakaram node use chaiyunna ie, linked lidt il sadharana head annu use chaiyuunae
void push(node **top,int val){    
    node* newNode=(node*)malloc(sizeof(node));//oru node nu venda place allogate chaiyuunu
    if(newNode==NULL){             
        printf("Out of memory");
        return;
    }
    newNode->data = val;  //node oru val assign chaiyuunnu, ie, aa node top ayairikum then next athinte position aduthu vere oru node ennai push chaiyanam
    newNode->next = *top;   //oru newnode nte top nthu ayairikanam old top ayairikanam
    *top = newNode;
}

int pop(node **top){ //O(1)
    if(*top==NULL){
        printf("stack is Empty");
        return INT_MIN;
    }
    node* del = *top;
    *top = (*top)->next;
    int temp = del->data;
    free(del);
    return temp;

}

int peek(node **top){

    if(*top==NULL){
        printf("stack is Empty");
        return INT_MIN;
    }
    return (*top)->data;
}

int main(){

    node* top = NULL;
    node* top2 = NULL;

    push(&top,3);
    push(&top,4);
    push(&top,7);
    push(&top,9);

    printf("Popped %d",pop(&top));

    return 0;
}

/*
try
insertAfter(val)
delete(val)
doubly circular linkedlist
*/