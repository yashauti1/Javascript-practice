//write a function that takes an array of numbers and returns a new array with only the even numbers



let arr=[10,13,34,45,56,22];
function filterEvenNumber(arr){
    return arr.filter(num=>num%2===0);
}

console.log(filterEvenNumber(arr));