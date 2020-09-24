// Logical AND(&&) Operator
// Returns TRUE if both operands are TRUE

console.log(true&& true); // True
console.log(false&&true); // False

let highIncome=true;
let goodCreditScore=true;
let eligibleForLoan=highIncome&&goodCreditScore;
console.log(eligibleForLoan);

// Logical OR(||)
// Return TRUE if any one of operands is TRUE

let highIncome=false;
let goodCreditScore=true;
let eligibleForLoan=highIncome || goodCreditScore;
console.log(eligibleForLoan);

// NOT (!)
let highIncome=false;
let goodCreditScore=false;
let eligibleForLoan=highIncome || goodCreditScore;
console.log('Eligible:',eligibleForLoan);
let applicationRefused= !eligibleForLoan;
console.log('Application Refused:',applicationRefused)