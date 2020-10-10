StarPattern(10);

function StarPattern(x){
    for(let i=1; i<=x; i++){
        for(let j=1; j<=i; j++){
            document.write('*')
        }
        document.write('<br/>');
    }
}



/* Output
*
**
***
****
*****
*/
