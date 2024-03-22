//variable is to store value, 3 types, var,let,const
// here var is variable, a is identifier, 67 is literals

//let 8harry = 7 -- undefined
//let var = 7 -- 
// var a = 667;
// console.log(a);

// let a = 67;
// console.log(a);


//difference btw var ,let and const
//var is globally scoped wherelse let and const are block scoped
//ie, in var we can change it anywhere.

//but the value in let can only be changed in block of scope
//let can be updated but not redeclared
//const cant be updated or redeclared



// var a = 5;
// let b = 10;
// console.log(b);

// {
//     let b = 5;
//     console.log(b);
// }

// let b = 'freena';
// b=5;
// let c = null;
// // {
// //     let b ='this'
// //     console.log(b);
// // }
// console.log(b);

// const author = "free"
// author="hello";       coonst cant be changed or redeclared
// console.log(author);


/************************************************************************************************************ */
//primitive datatypes and non-primitive datatypes

// nn bb ss us

let a = null;
let b = 5;
let c = BigInt(567) + BigInt(5);
let d = true;
let e = 'freena';
let f = Symbol();
let g  ;

console.log(a,b,c,d,e,f,g);
console.log(typeof(e));
console.log(typeof(b));
console.log(typeof(g));


/****************************************** */
// objects
// let a = Boolean('Hi');
// console.log(a); // true
// console.log(typeof(a)); // boolean
