//array method question remove all ocurances of a specific element from an aaray
let arr=[10,20,20,30,20,34,56];
let target=20;
function removeElem(arr,target){
    return arr.filter(item =>item !== target);
}


let removed=removeElem(arr,target);
console.log(removeElem(removed));