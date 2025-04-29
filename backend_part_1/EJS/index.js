const express = require('express') ; 
const path = require('path') ; 

const app = express() ; 

// set the view engine
app.set('view engine' , 'ejs')


//set the directory for the views : 
app.set('views' , path.join(__dirname , 'views')) ; 

const products = [
    {
        id : 1 , 
        title : "product 1"
    } ,
    {
        id : 2 , 
        title : "product 2"
    } ,
    {
        id : 3 , 
        title : "product 3"
    } ,
    {
        id : 4 , 
        title : "product 4"
    } ,
    {
        id : 5 , 
        title : "product 5"
    } 
]


app.get('/' , (req ,res)=>{
    res.render('home' , {title : 'Home' , products : products}) ; 
})
app.get('/about' , (req , res)=>{
    res.render('about' , {title : 'About page'}) ; 
})

const port = 3000 ; 

app.listen(port , console.log(`server is running at the http://localhost:${port}`))
    


