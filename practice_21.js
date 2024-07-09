//write a recursive function to calculate the facrorial  given number

function factorial(n){
if(n===1){
    return 1;
}else{
    return n*(factorial(n-1))
}
}

console.log(factorial(5));

