// functions

// 3 ways to declare function
// 1.function declaratio
// function expression
// arrow function

// function declaration- as normal function, we use function keyword to create a function

// example

function sum(){
    let a=4;   //a,b,c are calledd local varible
    let b=5;                //function creation
    let c=a+b;
    console.log(c);
}
sum()  //function calling

// the above example is called function without arguments and without return ,

// console.log(a); //error


/////////////////////////////////////////////////////////////////
// with aruguments and without return value
function s(x,y){  //parameters
    // let x=5;
    // let y=6;
    let z=x+y;
    console.log(z);
}
s(5,6)  //arguments

//////////////////////////////////////////////////////////////

// with arguments with return value

function freena(d,e){
    let c=d-e;
    return c;

}
console.log(freena(9,5));


// or
// function freena(d,e){
//     let c=d-e;
//     return c;

// }
// f=freena(9,5)
// console.log(f);
//
//////////////////////////////////////////////////////////////////

// no arguments , only return value

function pro(){
    k=7;
    l=8;
    m=k*l;
    return m
}
console.log(pro());


// fibonnacci and factorial