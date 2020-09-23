// Reference Types in JavaScript

// Object
// Array
// Function

// Objects
let person={
    name:"Farhan Ahmed",
    age:30,
    positon:"Software Engineer"
    }
    

    //Dot Notation
    person.name="John";
    //Bracket Notation
    person['name']="Mary";

    console.log(person);

    console.log(person.name);
    console.log(person.age);
    console.log(person.positon);

//Array

let weekDays=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
console.log(weekDays[0]);

console.log(weekDays.length)

for (const element of weekDays) {
    console.log(element);
  }


// Function

function greet(){
    console.log("Hello World!")
}
greet();

function greet1(name){
    console.log("Hello " + name)
}
greet1("farhan");