
// Getter in JavaScript
/*The get syntax binds an object property to a function that will be called
when that property is looked up.*/

// Stter in JavaScript
/*
The set syntax binds an object property to a function to be called when there
is an attempt to set that property.
*/
const person={
    firstName:'Farhan',
    lastName:'Ahmed',

    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};

person.fullName='John Smith';
console.log(person);