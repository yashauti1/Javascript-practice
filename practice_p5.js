// write a function that takes a string and returns the reversed version of it


let string="yash";
function reverseString(){
    return string.split("").reverse().join("");
}
console.log(reverseString(string));