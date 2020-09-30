const numbers=[3,4];

// Add element at Begning of an array
numbers.unshift(1,2);
console.log(numbers);

// Add element at Middle of an array
// first argument index position, second remove element and third add elements.
numbers.splice(2,0,'a','b');
console.log(numbers);

//Add element at the End of an array
numbers.push(5,6);
console.log(numbers);