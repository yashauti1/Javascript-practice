//implement a try-catch block to handle an error that occurs during api data fetching

function fetchData(){
try{
    let response=fetch("www.google.com");
    console.log(response);
}catch(error){
    console.log(error);
}
}

console.log(fetchData());