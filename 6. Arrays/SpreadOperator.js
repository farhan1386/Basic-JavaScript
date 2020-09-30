
const first=[1,2,3];
const second=[4,5,6];

// combine two array elements using spread operator

//const combined=[...first,...second];
const combined=[...first,'a',...second,'b']
console.log(combined);


// Copy an array element using spread operator
const numbers=[1,2,3,4,5,6,7,8,9,10]
const copy=[...numbers]
console.log(copy);