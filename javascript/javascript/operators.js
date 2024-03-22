let a = Prompt("hey , enter your age");
a = Number.parseInt(a);
if(a<0){
    alert("invalid age")
}
else if(a<10){
    alert("you cant drive")
}
else if(a<18 && a>=17){
    alert("you are a young but u can drive when u are 18")
}
else{
    alert("u can drive")
}