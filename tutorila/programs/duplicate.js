let l1 = [1, 2, 1, 2, 3, 4, 5, 1, 1, 2, 5, 6, 7, 8, 9, 9];
console.log(l1.length);
console.log(l1);

let x = [];
let count = 0;

for (let i of l1) {
    if (!x.includes(i)) {
        x.push(i);
    } else {
        count++;
    }
}

if (count > 0) {
    console.log("True");
}
