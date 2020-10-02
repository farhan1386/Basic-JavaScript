# Basic JavaScript Tutorial

## What is javascript?
JavaScript is a scripting or programming language that allows you to implement complex features on web pages.

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
