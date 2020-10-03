# Basic JavaScript Tutorial

## What is javascript?
JavaScript is a scripting programming language which interact with HTML pages and it is understood by web browsers. JavaScript is also an Object based Programming language.

## What are the data types supported by JavaScript?
JavaScript have 2 type of data type support 
* Primitive data type
* Reference data type

| Command | Description |
| --- | --- |
| String | Object |
| Number | Array |
| Boolean | Function |
| Undefined |  |
| Null |  |

## What are the ways to define a variable in JavaScript?

The three possible ways of defining a variable in JavaScript are:

* **Var** – The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable. Example: var a =10; Variable declarations are processed before the execution of the code.
*	**Const** – The idea of const functions is not allow them to modify the object on which they are called. When a function is declared as const, it can be called on any type of object.
*	**Let** – It is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in.

## What is the difference between null & undefined?

Undefined means a variable has been declared but has not yet been assigned a value.
Example: let x;

Null is an assignment value. It can be assigned to a variable as a representation of no value.
Example: let x=null;

Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.

## What are the scopes of a variable in JavaScript?

*	Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code.
*	Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

## What is the purpose of ‘This’ operator in JavaScript?

The JavaScript **this** keyword refers to the object it belongs to. This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this refers to the global object.

## What is the difference between Attributes and Property?

Attributes- provide more details on an element like id, type, value etc.
Property- is the value assigned to the property like type=”text”, value=’Name’ etc.

## What is different between var and let?
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
```
var a=10;
var a=20;

console.log(a);
```

```
// Uncaught SyntaxError: Identifier 'a' has already been declared
let a=50;
let a=60;

console.log(a);
```

## What is const?
const keyword to define a variable that cannot be reassigned.
```
// Uncaught SyntaxError: Identifier 'b' has already been declared
const b=20;
let b=30;
console.log(b);
```
## What is Callback function?

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
~~~
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
~~~
## Function hoisting in JavaScript?

Hoisting is a JavaScript technique which moves variables and function declarations to the top of their scope before code execution begins.
~~~
console.log(functionBelow("Hello"));
function functionBelow(greet) {
   return `${greet} world`;
}
console.log(functionBelow("Hi"));
~~~

## List out the different ways an HTML element can be accessed in a JavaScript code.
* **getElementById(‘idname’)**: Gets an element by its ID name.
* **getElementsByClass(‘classname’)**: Gets all the elements that have the given class name.
* **getElementsByTagName(‘tagname’)**: Gets all the elements that have the given tag name.
* **querySelector()**: This function takes css style selector and returns the first selected element.

## In how many ways a JavaScript code can be involved in an HTML file?

There are 3 different ways in which a JavaScript code can be involved in an HTML file:
•	Inline
•	Internal
•	External

What is a typed language?

Typed Language is in which the values are associated with values and not with variables. It is of two types:
•	Dynamically: in this, the variable can hold multiple types; like in JS a variable can take number, chars.
•	Statically: in this, the variable can hold only one type, like in Java a variable declared of string can take only set of characters and nothing else.

What is the difference between the operators == & ===?

== in JavaScript is used for comparing two variables, but it ignores the data type of variable.
=== is used for comparing two variables, but this operator also checks data type and compares two values.

## What is the difference between innerHTML & innerText?

InnerHTML – It will process an HTML tag if found in a string
InnerText – It will not process an HTML tag if found in a string

## What is NaN in JavaScript?

The NaN property represents "Not-a-Number" value. This property indicates that a value is not a legal number.

## What is the ‘Strict’ mode in JavaScript and how can it be enabled?

Strict mode is a way to introduce better error-checking into your code.
"use strict"; Defines that JavaScript code should be executed in "strict mode".
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

