
const courses=[
    {id:1, name:'ASP.Net MVC'},
    {id:2, name:'Angular'},
    {id:3, name:'React'},
    {id:4, name:'SQL Server'},
    {id:5, name:'Core MVC'}
]

// find the obejct in array
const course=courses.find(function(course){
    return course.name==='Core MVC'
})

console.log(course);

// Find the index in array
const course1=courses.findIndex(function(course){
    return course.name==='React'
})
console.log(course1);