const fact=factorial(6);
console.log(fact)

function factorial(x){
    if(x===0){
        return 1;
    }
    return x*factorial(x-1);
}