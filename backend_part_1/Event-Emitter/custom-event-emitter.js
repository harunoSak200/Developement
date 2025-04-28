const EventEmitter  = require('events') ; 

class MyCustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting = "hello"
        this.owner = "gen-bot 2.0"
    }

    greet(name){
        this.emit('greeting' , `${this.greeting} ${name} from ${this.owner}`)
    }
}

const  myCustomEmitter = new MyCustomEmitter() ; 
myCustomEmitter.on('greeting' , (input)=>{
    console.log('greeting event' , input);
}) ; 

myCustomEmitter.greet("aditya kshatriya") ; 