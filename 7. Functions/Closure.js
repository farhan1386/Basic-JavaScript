
/*
A closure is a function having access to the parent scope, 
even after the parent function has closed. 

 a closure gives you access to an outer function’s scope from
 an inner function.
*/

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12