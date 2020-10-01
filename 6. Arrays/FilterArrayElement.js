
// Filter an array element uisng filter method
const numbers=[1,2,5,4,6,-1,7,-5,-3];

// Arrow Function
const filtered=numbers.filter(n => n >= 0);

/*
const filtered=numbers.filter(function(value){
    return value>=0;
});
*/
console.log(numbers);
console.log(filtered);