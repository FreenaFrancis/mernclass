let a={
    name:"freena",
    place:"nilgiri"
};
console.log(a["name"]); //sqayare bracket vechu value access chaiyam
console.log(a.name);
console.log(typeof(a));



let b ={
    name:"gfg",
    age:22,
    address:{
        place:"cherambadi",
        street:"chappumthode"
    }
}
delete b.address;
console.log(b);
// console.log(b.address.place);




// iterate an object we use for in

for(let i in b){
    // console.log(i);
    // console.log(b[i]);
    console.log(i,b[i]);
}