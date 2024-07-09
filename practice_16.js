//use map() to double all the elements in an array

let arr=[19,34,22,3,44,343];

function doubleAllElemnt(arr){
    return arr.map(num=>num*2)
}
console.log(doubleAllElemnt(arr));