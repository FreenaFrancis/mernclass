const prompt= require('prompt-sync')()





//  array- collection of item with datatypes
// primitive means nammal create chaiyunna data like int,char

// example
 let a=[];      
 console.log(typeof(a));              //array is an non-primitive dataype annu

//  ex
let x=[5,6,"hi",7];
console.log(x);
console.log(typeof(x));
console.log(x.length);        // array length


// // destructuring array- it is in prompt file

// let b=[5,7,"hi"];
// let [e,f,g]=hey;
// console.log(hey);





// array methods
// push-add element to its last
let z=[1,2,34,5]
z.push(5);
console.log(z);
console.log(z[2]);  // accessing element
z[2]="hello"  //change the value in array
console.log(z);


//passing an object to an array

let p=[6,7,"hi",{name:"freena",age:23}];
console.log(p);



// pop-remove last element

let q=[1,2,4,5,6,7];
q.pop();
console.log(q);

// shift-to remove first element

let s=[1,2,3,4,5];
s.shift();
console.log(s);

// unshift-add new elemnt its firstshift and unshift the index of elemnt will be changed
// when we using 

let r=[2,3,4,5,6];
r.unshift(1);
console.log(r);


// splice

let t =[2,4,5,7,9,1,2,3,4,5];
// t.splice(2);
// t.splice(2,3)   //evidea kodutha first index nn parayunnathu evidea nn start chaiyanam nn annu pinea kodukunnathu athra element remove chaiyanam nnullathu annu ok


t.splice(2,3,23)  ////evidea kodutha first index nn parayunnathu evidea nn start chaiyanam nn annu pinea kodukunnathu athra element remove chaiyanam nnullathu annu, and the next elemnt koduthathu ie, 23 indicate chaithathu aa element add chaiyanam nn annu
console.log(t);


const arrr=[1,2,3,4,5];
arrr.length=2;
console.log(arrr);//1,2