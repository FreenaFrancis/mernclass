let rows = 6; 
let char = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    char += j;
  }
  char += "\n";
}
console.log(char);

// 1
// 12
// 123
// 1234
// 12345
// 123456


let col=5;
let str = "";

for(i=1;i<=col;i++){
    for(j=1;j <= i; j++){
        str += i;
    }
    str += "\n";
}
console.log(str);

// 1
// 22
// 333
// 4444
// 55555



let sq=5;
let ch="";
for(i=1;i<=sq;i++){
    for(j=1;j<=sq;j++){
        ch+=i;
    }
    ch+="\n"
}
console.log(ch);

// 11111
// 22222
// 33333
// 4444499u
// 55555


for (let i = 5; i >= 1; i--) {
    let rows = "";
    for (let j = 1; j <= i; j++) {
      rows += i;
    }
    console.log(rows);
  }
  


// 555555
// 4444
// 333
// 22
// 1
