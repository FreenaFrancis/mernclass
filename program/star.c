#include <stdio.h>
int main(){
    int count,space,i,j;
    printf("Enter a number");
    scanf("%d",&count);
    for ( i = 0; i < count; i++)
    {
        /* code */
        for ( space = count; space >= i; space--)
        {
            /* code */
            printf(" ");
        }
        for ( j = 0; j <=i; j++)
        {
            /* code */
            printf("*");
        }
        printf("\n");
        
        
    }
    
}