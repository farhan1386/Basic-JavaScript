
// Sort an array element using sort method
const numbers=[5,3,2,4,6,8];
numbers.sort();
console.log(numbers);

// Reverse an array element using reverse method
numbers.reverse();
console.log(numbers);

const courses=[
    {id:1, name:'ASP.Net MVC'},
    {id:2, name:'Angular'},
    {id:3, name:'React'},
    {id:4, name:'SQL Server'},
    {id:5, name:'Core MVC'}
]; 

courses.sort(function(a,b){
    // a < b => -1
    // a > b => 1
    // a===b => 0

    const nameA=a.name.toLowerCase();
    const nameB=b.name.toLowerCase();

    // Or
    //const nameA=a.name.toLowerCase();
    //const nameB=b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1 ;
    return 0;
});

console.log(courses);