const express = require('express');
const app = express();

const port = 5001 ; 


app.get('/' , (req , res)=>{
    // res.send("hello from the server ..")
    res.status(200).json({
        success : true , 
        msg : "backend is working.."
    })
})
app.get('/about' , (req , res)=>{
    res.send({
        msg : "hello this the about route"
    })
})

app.listen(port , ()=>{
    console.log(`visit http://localhost:${port}`) ; 
})