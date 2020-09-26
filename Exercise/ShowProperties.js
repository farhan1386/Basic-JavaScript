const movie={
    title:'a',
    rereaseDate:2020,
    director:'Farhan'
}

showProperties(movie);

function showProperties(obj){
    for(let key in obj)
    if(typeof obj[key] === 'string')
    console.log(key, obj[key]);
}