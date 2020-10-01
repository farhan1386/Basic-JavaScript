/*
The reduce() method executes a reducer function 
(that you provide) on each element of the array,
resulting in single output value.
*/
const numbers=[1,2,4,5,3,6,7,9,5];

const result=numbers.reduce((accumulator, currentValue)=>{
  return accumulator+currentValue;
},0);

console.log(result);