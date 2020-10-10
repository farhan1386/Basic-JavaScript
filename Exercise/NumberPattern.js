
NumberPattern(10);

function NumberPattern(number){
    for(let i=1; i<=number; i++){
        for(let j=1; j<=i; j++){
            document.write(i)
        }
        document.write('<br/>');
    }
}

/* Output
1
22
333
4444
55555
*/