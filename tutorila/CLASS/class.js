// length

let st="fgggg";
console.log(st.length);
console.log(st[0].toUpperCase());


// slice
let s="freena"
console.log(s.slice(2,4));
console.log(s.slice(2));
// replace

let a="hello world";
console.log(a.replace("hello","hey"));

// concate,+
let b="freena"
let c="francis"
let d=b.concat(c);
console.log(d);

// trim(), trimstart(), trtimend()

let f="  fre "
console.log(f);
console.log(f.trim());
console.log(f.trimStart());
console.log(f.trimEnd());

// loop
let p="freena";
for(let i=0;i<=p.length-1;i++){
    console.log(p[i]);
}

// substring
let text="hello everyone";
console.log(text.substring(0,4));  //
console.log(text.substring(5));

// substr

console.log(text.substr(5,5));

// padstart

let x='5';
console.log(x.padEnd(4));    
console.log(x.padStart(4)); 

let y=5;
let t=y.toString();
console.log(typeof(t));  //'5'

// charcodeAt- text utf-16 code return 
let w='hello'; //
console.log(w.charCodeAt(4));
// charAt
console.log(w.charAt(0));

// string search methods- indexOf,lastindexOf,serach,match,matchAll, includes

let hh="welcome to class";
console.log(hh.indexOf('welcome'));

// lastindexof
let la="please have tour food !please"
console.log(la.lastIndexOf("please"));  
console.log(la.indexOf("please","have"));

//search

console.log(la.search("food"));

// match()

let tt="the rain is spain stay mainly in plain";;
console.log(tt.match("ain"));

// matchall
let te="i love cats.Cats are very lovely.Cats are cute";
console.log(te.matchAll("cats"))

// include

console.log(te.includes("is"));


const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

