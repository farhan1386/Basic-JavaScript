// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisibel by both 3 and 5 => FizzBuzz
// Not divisible by 3 of 5 => input
// Not a number => 'Not a number'

const output=fizzBuzz(true);
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number')
    return NaN;

    if((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

    if(input % 3 === 0)
    return 'Fizz';

    if(input % 5 ===0)
    return 'Buzz'

    return input;
}
