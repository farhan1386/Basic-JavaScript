
/*In JavaScript, truthy are expressions which evaluates to boolean true value
 and falsy evaluates to boolean false value. Unlike other languages, 
 true and false values are not limited to boolean data types and comparisons.
*/

// There are total 6 falsy values/expressions

// undefine
// null
// NaN
// ''
// 0
// false

//Truthy
//Any expression or value other than above listed falsy values is considered truthy

const array=[0,null, undefined,2,5,3,8];
console.log(countTruthy(array))

function countTruthy(array){
    let count=0;
    for(let value of array)
     if(value)
       count++;
    return count;
}