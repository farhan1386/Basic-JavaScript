/*
A function's this keyword behaves a little differently in JavaScript 
compared to other languages. It also has some differences between 
strict mode and non-strict mode.
*/

const video={
    title:'abcd',
    play(){
        console.log(this);
    }
};

video.stop=function(){
    console.log(this);
}

video.stop();

function Video(title){
    this.title=title;
    console.log(this);
}

const v=new Video('b');