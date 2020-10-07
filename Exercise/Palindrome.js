
let input=prompt('Enter number to check palidrome');

let reminder, sum=0;
let temp=input;
while(input>0){
    reminder=input%10;
    sum=(sum*10)+reminder;
    input=parseInt(input/10);
}
if(temp==sum){
    console.log(temp + " is palidrome");
}
else{
    console.log(temp + " is not palindrome");
}
