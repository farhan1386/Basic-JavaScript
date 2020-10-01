
const numbers=[1,5,43,6,8,79,];
console.log(except(numbers,[79,43]));

function except(array, excluded){
    const output=[];
    for(let element of array)
        if(!excluded.includes(element))
        output.push(element);
    return output;
}
