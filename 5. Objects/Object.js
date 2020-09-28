employee={
    firstName:'Farhan',
    lastName:'Ahmed',
    position:'Software Engineer',
    office:'Bangalore',
    age:30,
    salary:80000,
    fullName:function(){
      return this.firstName + ' ' + this.lastName;
    },
};

console.log(employee.fullName())
console.log(employee.position);
console.log(employee.salary)