// const prompt= require('prompt-sync')()


// // destructing array
//  let a=[2,4,6];



// //  for each- to iterate an array
// // syntax
// // x.foreach(function()
// // {
// //     // stmt
// // });

// // ex

// y=[5,5,6,7];
// y.forEach(function(i){
//     console.log(i);
// })

// //  convert array into string

// let b=[1,3,5,6,7]
// let c=b.toString()
// console.log(typeof(c));

// // join- to add elemnts or, speacial character to an array
// console.log(b.join("hi"));



// // concat-to concat 2 arrays

// let d=[1,3,5,7]
// let e=[4,5,7,8]
// let f=d.concat(e);
// console.log(f);

// // another ex"""

// let g=[1,3,4];
// let  h=d.concat(e,g);
// console.log(h);



// // sort

// let i=[7,56,6,4,78];
// console.log(i.sort());

// let j=["v","a","e","j"];
// console.log(j.sort());


// reverse                                                                                                                                                                                          




// slice 
let k=["a","g","f","h","y","y"];
console.log(k.slice(2)); //index 2 thottu ullathu print avum
console.log(k.slice(2,5)); //index 2 thottu start chaithu pinea athra index element vere print chaiyam


// array map - loop polai annu, 
// differenve btw noramal array and map is that in map it create an neew array based on condition or functiponality, without affecting the noram array

let l=[2,3,5,7,8];
let m=l.map(function(l){
    return l*5
})
console.log(m);


