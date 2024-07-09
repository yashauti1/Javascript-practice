//create a program that checks if given year is a leap year

let isLeapYear=(year)=>{
if((year%4==0 && year%100 !==0 || year % 400===0)){
    console.log("it is leap year");
}else{
    console.log("not a  leap year");
}
}

isLeapYear(2000);