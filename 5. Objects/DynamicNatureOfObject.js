
// Dynamic nature of object
const circle={
    radius:1
};

// Adding Property in existing object
circle.color='green';

// Adding method or function in existing object
circle.draw=function(){}

// delete property and method or function from object 
delete circle.color;
delete circle.draw;

console.log(circle);
