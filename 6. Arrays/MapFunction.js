/*
The Map object holds key-value pairs and remembers the original 
insertion order of the keys. Any value (both objects and primitive values)
may be used as either a key or a value.
*/

const numbers=[4,9,16,25,36];
const result=numbers.map(Math.sqrt);
console.log(result);

const result1=numbers.map(multiply);
console.log(result1);

function multiply(number){
    return number * 5;
}