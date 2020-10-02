/*
The rest parameter syntax allows us to represent an indefinite 
number of arguments as an array.
*/

function sum(...args){
    return args.reduce((a,b)=>a+b);
}

console.log(sum(1,23,4,5,6));