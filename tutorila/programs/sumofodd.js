let N=5;
let arr=[1,3,4,5,6];
function sumofodd(){
   let sum=0;
    for(i=0;i<N;i++){
        if(arr[i] % 2 !== 0){
            sum=sum+arr[i];
        }
    }
    console.log("sum of odd number is",sum);
}
sumofodd()


