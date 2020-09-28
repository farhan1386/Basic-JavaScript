// Cloning an Object

const employee={
    firstName:'Farhan',
    lastName:'Ahmed',
    age:30,
    fullName(){
        return this.firstName + ' ' +this.lastName
    }
}

// Approach One
const another1={};
for(let key in employee){
    another1[key]=employee[key];
}
console.log(another1);

// Approach Two
const another2=Object.assign({},employee);
console.log(another2);

// Approach Three
const another3={...employee};
console.log(another3);