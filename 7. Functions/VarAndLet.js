// var => function scope
// ES6(2015): let, const =>block-scope

function start1(){
    for(var i=0; i<5; i++)
    console.log(i)

    // This code will execute because var is not scope access 
    // 'i' will accessible outside code block
    console.log(i)
}

start1();


function start2(){
    for(let i=0; i<5; i++)
    console.log(i)

    // This code will throw an error because let is scope access 
    // 'i' will accessible outside code block
    console.log(i)
}

start2();