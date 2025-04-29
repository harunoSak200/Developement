const express = require('express') ; 
const app = express() ; 

// we can do multiple things using the app object : 


// application level settings

app.set('view engine' , 'ejs') ;

//routing : 
app.get('/' , (req , res)={})

app.post('/api/data' , (req , res)=>{
    res.json({
        msg : "data received" ,
        data: req.body
    })
})


// error - handling middleware
app.use((err , req , res, next)=>{
    console.log(err.stack) ; 
    res.status(500).send('something went wrong') ; 
}) ; 