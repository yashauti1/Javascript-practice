//find the largest element in an array using the reduce method

let arr=[2,23,34,32,12,21];

function largestNumber(arr){
    return arr.reduce((max,current)=>
       current  > max ? current:max)
    
}
let reduce= largestNumber(arr)
console.log(largestNumber(arr));