const express = require('express') ; 
const app = express() ; 
const zod = require("zod");
const PORT = 7001 ;
const schemma = zod.array(zod.number()) ; 
const schemma_user = zod.object({
    email : zod.string() , 
    password : zod.string() , 
    country : zod.literal("IN").or(zod.literal("US")) , 
    kidneys : zod.array(zod.number())
})

app.use(express.json()) ; 

app.post('/health-checkup' , (req ,res)=>{
    const kidneys = req.body.kidneys ; 
    const response = schemma.safeParse(kidneys) ; 
    res.json({
        response , 
    })
})
app.post('/user_reg' , (req,res)=>{
    const user_details = req.body.user  ; 
    console.log(user_details) ; 
    const response = schemma_user.safeParse(user_details) ;
    res.json({
        response , 
    })
})



app.listen(PORT , ()=>{
    console.log(`App is running at the PORT:${PORT}\nVisit http://localhost:${PORT}`) ; 
})