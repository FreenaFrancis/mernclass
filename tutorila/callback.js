// callback-    oru function ennai arguments ayaittu pass chaiyunnathinu annu call back nn parayunnathu
// it is also knoen as first class function


// function sum(a,b){
//     console.log(a);
//     b()
// }

// function add(){
//     console.log("the sum of:");
// }
// sum(2,5)

function sum(a, b) {
    console.log(a);
    b();
}

function add() {
    console.log("the sum of:");
}

sum(2, add);
