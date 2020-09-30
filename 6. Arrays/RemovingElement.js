const numbers=[1,2,3,4,5];

// Remove an element from beginning of an array
const remove=numbers.shift()
console.log(remove);
console.log(numbers);

// Remove an element from middle of an array.
// first argument index and second argumnet number of element want to remove.
const removeMiddle=numbers.splice(2,1);
console.log(removeMiddle);
console.log(numbers);

// Remove an element at the end of an array.
const removeEnd=numbers.pop();
console.log(removeEnd);
console.log(numbers);