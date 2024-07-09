
// implement a recuresive  function to find the nth fibonanacci number

function fibonacci(m){
    if(m<=1){
        return m;
    }else{
        return fibonacci(m-1)+fibonacci(m-1)
    }
}

console.log(fibonacci(4)
);