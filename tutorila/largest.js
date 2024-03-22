function missingNum(arr,n) {
    var result=""

    let greatest=Math.max(...arr)



    for(let i=1;i<=greatest;i++) {
        if(!arr.includes(i) && i>0) {
            result = i
            return result
        }
    }

}


let arr=[5,4,-1,2,1]
let n=5
let result=missingNum(arr,n)
console.log(result);