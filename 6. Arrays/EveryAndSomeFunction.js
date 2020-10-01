
/* The every() method tests whether all elements in the array pass
the test implemented by the provided function. It returns a Boolean value.
*/
const numbers1=[1, 2, 3, 4, 5];

const belowTen=numbers1.every(function(value){
 return value<=10;
});

console.log(belowTen);

/*
The some() method tests whether at least one element in the array
passes the test implemented by the provided function. 
It returns a Boolean value.
*/
const numbers2=[1, 2, 3, 4, 5];

const even=numbers2.some(function(value){
    return value % 2 === 0;
});

console.log(even);