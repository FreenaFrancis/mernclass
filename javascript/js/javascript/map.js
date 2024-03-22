// map is similar to loop 
// in loop,it lopps only the elements in array , but in map it creates an new array

// syntax:

// Array.map(function()) //callback function
// {
//     stmt;
// }

let num = [1,2,3,4];
let double_num = num.map(function(num)

{
    return num*2;
})
console.log(double_num);