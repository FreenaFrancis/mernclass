let a=5;
let b=6;

// with temp variable

let c;
c=a;
a=b;
b=c;
console.log(a,b);


// without temp variable

// a=a/a;  //2
// a=a*b;   //6

a=a+b;
b=a-b;
a=a-b;
console.log(a,b);