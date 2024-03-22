let numRows = 5;

for (let i = 1; i <= numRows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}
