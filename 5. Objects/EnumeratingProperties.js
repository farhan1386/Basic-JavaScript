// Enumerating Properties of an Object

const employee={
    firstName:'Farhan',
    lastName:'Ahmed',
    age:30
}

for(let item in employee){
    console.log(item,employee[item]);
}

for(let key of Object.keys(employee)){
    console.log(key);
}

for(let entry of Object.entries(employee)){
    console.log(entry);
}

if('firstName' in employee) console.log('Yes');