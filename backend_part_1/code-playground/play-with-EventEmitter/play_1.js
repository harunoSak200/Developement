const EventEmitter = require('events');

const myFirstEventEmitter = new EventEmitter();

// 1. Define function
function userjoined(name) {
    console.log('user status updated from not joined to joined.....' , name);
}

// 2. Register listeners
myFirstEventEmitter.on('greet', (name) => {
    console.log(`hello ${name}`);
});

myFirstEventEmitter.on('greet', (name) => {
    console.log(`${name}, thanks for joining here...`);
});

myFirstEventEmitter.on('greet' , (name)=>{
    console.log('This is :', name , 'Tea is getting prepared.. , Hence all the guest are requested to be in the main hall')
})

// Register userjoined function directly
myFirstEventEmitter.on('greet', userjoined);

// 3. Emit event
myFirstEventEmitter.emit('greet', 'Aditya Kshatriya');


