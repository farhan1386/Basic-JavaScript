
const numbers=[1,5,43,6,8,79,];
console.log(includes(numbers,79));

function includes(array, searchElement){
    for(let element of array)
        if(element===searchElement)
        return true;
    return false;
}
