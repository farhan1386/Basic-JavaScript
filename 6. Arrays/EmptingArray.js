
let numbers=[1,2,3,4,5];

console.log(numbers);

// Solution 1
numbers=[];
console.log(numbers);

// Solution 2
numbers.length=0;
console.log(numbers);

// Solution 3
numbers.splice(0,numbers.length);
console.log(numbers);

//Solution 4
// This is not useful when millions of element it will poping up so it not recomended
while(numbers.length>0)
 numbers.pop();
console.log(numbers);