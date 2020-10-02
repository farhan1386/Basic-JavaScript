
const numbers=[1,2,32,2,8,2,4,5,6];

const result=countOccurrences(numbers,2);
console.log(result);

function countOccurrences(array, searchElement){
    let count=0;
    for(let element of array)
        if(element===searchElement)
        count++;
    return count;
}