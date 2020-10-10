
let principalAmount=parseInt(prompt('Please enter loan amount'));
let loanTerm=parseInt(prompt('Enter the loan term in months'));
const interestRate=8;

let simpleInterest=(principalAmount*interestRate*loanTerm)/100;
let totalAmount=simpleInterest+principalAmount;
console.log("Simple Interest:"+ simpleInterest);
console.log("Total Amount:" + totalAmount)


