// finding the square root


let number = 5;
const sqaure = number* number
console.log(`the square of ${number} is ${sqaure}` );

function square(num){
    return(num*num)
}
const result = square(7)
console.log(result);


const nu = 5;
 const squareroot = Math.sqrt(nu)
 console.log(squareroot);


 ///////////////////////////////////////////////////////
 //swap numbers

 let a = 8;
 let b = 5;
 
 console.log(`Before swapping: a=${a}, b=${b}`);
 [a, b] = [b, a];
 console.log(`After swapping: a=${a}, b=${b}`);
 
 