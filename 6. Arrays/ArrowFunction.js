// One param. With simple expression return is not needed
// param => expression

// Multiple params require parentheses. With simple expression return is not needed
// (param1, paramN) => expression

// Multiline statements require body brackets and return
/* param => {
  let a = 1;
  return a + param1;
}*/

// Multiple params require parentheses. Multiline statements require body brackets and return
/*
(param1, paramN) => {
   let a = 1;
   return a + param1;
}
*/

const courses=[
    {id:1, name:'ASP.Net MVC'},
    {id:2, name:'Angular'},
    {id:3, name:'React'},
    {id:4, name:'SQL Server'},
    {id:5, name:'Core MVC'}
]

// find the obejct in array
const course=courses.find(course=>course.name==='Core MVC');
console.log(course);

