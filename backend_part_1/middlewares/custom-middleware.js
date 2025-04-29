const express = require('express') ; 
const app = express() ; 

// define middleware function  : 
const requestTimeStampLogger = (req , res , next)=>{
    const timeStamp = new Date().toISOString() ; 
    console.log(`${timeStamp} from ${req.method} to ${req.url}`) ; 
    next() ; 
}


app.use(requestTimeStampLogger) ; 

app.get('/home' , (req , res)=>{
    res.send('Home page') ; 
})
app.get('/about' , (req ,res)=>{
    res.send('This is about page')
})

app.listen(3000 , console.log('server running at port http://localhost:3000'))