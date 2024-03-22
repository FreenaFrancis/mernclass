let arr=[2,2,4,5];
let sum=0;
let len=arr.len;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        sum=sum+arr[i];
    }
}
console.log(sum);