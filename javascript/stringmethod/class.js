// // filter- takes all the elements that satisfy thecondition  

// let arr=[1,2,3,4,5,6]
// let fi=arr.filter((num)=>{
//     return num%2==0;
// })
// console.log(fi);

// // find()-takes the first elements that satisfy thecondition 
// let ar=[1,2,3,4,5,6]
// let f=arr.find((n)=>{
//     return n%2==0;
// })
// console.log(f);

// // reduce - 
// // acc=0,cuurent=1
// // 0+1=1 
// // acc=1,current=2=1+2=3
// // 3+3=6
// // 6+4=10
// // 10+5=15
// // 15+6=21

// // acc= 0,cuu=1 =0+1=1;
// // 1+2=3
// // 3+3=6
// // 6+4=10
// // 10+5=15

// let a=[1,2,3,4,5]
// let re=a.reduce((a,c)=>{
// return  a+c;
// })
// console.log(re);


// // Date objects -

// // let now = new Date();
// // console.log(now);
// // console.log(now.toDateString());
// // console.log(now.getDay()); // it will give you day of week
// // console.log(now.getMonth());
// // console.log(now.getFullYear());
// // // time
// // console.log(now.getTime());
// // console.log(now.getHours());
// // console.log(now.getMinutes());
// // console.log(now.getSeconds());
// // console.log(now.getMilliseconds());

// // set date

// // console.log(now.setDate(5));
// // console.log(now.toDateString());
// // console.log(now.setFullYear(2025));
// // console.log(now.getFullYear());
// // console.log(now);
// // console.log(now.setMonth(5));
// // console.log(now.getMonth());

// // Math methods-sqrt,floor,round,ceil,random

// let b=5;
// console.log(Math.sqrt(b));
// // abs-absolute

// let ab=-0.5;
// let c=Math.abs(ab);
// console.log(c);

// // floor -
// let ff=5.4;
// console.log(Math.floor(ff));  //5.6=5,5.3=5
// // ceil
// console.log(Math.ceil(ff)); //5.3=6,5.6=6
// // round
// console.log(Math.round(ff))  //5.3=5,5.7=6

// // number methods

// let aa="99";
// let n=Number(aa);
// console.log(n);
// console.log(n+10);

// //  
// let t=false;
// let nu=Number(t);
// console.log(nu);

// // parseInt - string ennai integers akanum, floating integers 
// let s=1.6;
// let p=parseInt(s);
// console.log(p)

// // parseFloat
// let fe=10;
// let fff=parseFloat(fe);
// console.log(fff);

// // isFinite
// let g=4;
// let i=Number.isFinite(g);
// console.log(i);


class employee{
    constructor(name,place,salary){
        this.name=name;
        this.place=place
        this.salary=salary

}
calculate
}
