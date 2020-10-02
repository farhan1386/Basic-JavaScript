
/*
Default function parameters allow named parameters to be initialized 
with default values if no value or undefined is passed.
*/
function interest(principal, rate=3.5, years=5){
    return principal * rate / 100 * years;
}

console.log(interest(100000));