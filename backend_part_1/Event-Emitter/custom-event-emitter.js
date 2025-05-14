const EventEmitter  = require('events') ; 

class MyCustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting = "hello"
        this.morning = "Good Morning"
        this.task = "What do I do for you Sir?"
        this.water = "Would you like to have a glass of water"
        this.owner = "gen-bot 2.0"
    }

    greet(name){
        // this.emit('greetPrincipal' , `${this.greeting} this is ${name} headed by ${this.owner}`)
        // // this.emit('greetme' , console.log('This is the another greet method') )
        // this.emit('greetPrincipal' , `${this.task} sir!`) ; 
        // this.emit('greetPrincipal' , `${this.water}?`)
        // this.emit('greetPrincipal' , `Thank you and Good Bye from ${this.owner}`)
        this.emit('greetPrincipal' , `${this.morning} Sir this is ${this.owner} ` )
        this.emit('greetMAM' , `${this.morning} Mam this is ${this.owner}`)
    }
    celebrate(festival_name){
        this.emit('greetMAM' , `${this.morning} Mam today is ${festival_name}`)
    }
}

const  myCustomEmitter = new MyCustomEmitter() ; 

myCustomEmitter.on('greetPrincipal' , (input)=>{
    console.log(input);
}) ; 

myCustomEmitter.on('greetMAM' , (input)=>{
    console.log(input) ; 
}) ;

myCustomEmitter.greet("aditya kshatriya") ; 
myCustomEmitter.celebrate("Diwali")
