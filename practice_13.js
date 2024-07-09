// write a function that calculated the factorial of a given number

function factorial(num){
    if(num ===0 || num ===1){
        return 1;
    }else{
        let fact=num;
        for(let i; i<=num; i++){
            fact*=i;
        }
        return fact;
    }

}
console.log(factorial(4));