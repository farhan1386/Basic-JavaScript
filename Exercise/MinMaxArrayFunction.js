
const result=arrayFromRange(4,10);
console.log(result);

function arrayFromRange(min,max){
    const output=[];
    for(let i = min; i <= max; i++)
    output.push(i);
    return output;
}