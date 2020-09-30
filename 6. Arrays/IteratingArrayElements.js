
const numbers=[1,2,3,4,5,6,7,8];


// Iterate an array elements using for loop
for(let number of numbers)
  console.log(number);

// Iterate an array elements using foreach
numbers.forEach(function(number){
    console.log(numbers)
});

// Iterate an array elements using arrow function
numbers.forEach(number => console.log(numbers));

numbers.forEach((number,index) => console.log(index,numbers));