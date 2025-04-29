const express = require('express') ; 
const app = express() ; 

// define middleware function  : 
const myfirstmiddleware = (req ,res , next)=>{
    console.log('This is the first middleware running') ; 
    next() ;
     // This next executes the other routes , if it not present only middleware part will be exceuted and the rest app routes will not be exceuted
} ; 

app.use(myfirstmiddleware) ; 

app.get('/home' , (req , res)=>{
    res.send('Home page') ; 
})
app.get('/about' , (req ,res)=>{
    res.send('This is about page')
})

app.listen(3000 , console.log('server running at port http://localhost:3000'))