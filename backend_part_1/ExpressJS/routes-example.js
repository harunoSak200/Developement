const express = require('express') ; 
const app = express() ; 
const port = 3000 ; 
app.get('/',(req , res)=>{
    res.send('welcome to homepage') ; 
})
// get all products : 
app.get('/products' , (req , res)=>{
    const products = [
        {
            id : 1 , 
            label : "Product 1"
        } , 
        {
            id : 2 , 
            label : "Product 1"
        } , 
        {
            id : 3 , 
            label : "Product 1"
        } , 
        {
            id : 4 , 
            label : "Product 1"
        }
    ]

    res.status(200).send(products) ; 
})


// reading the parameters from the url send by the user as request
app.get('/products/:id' , (req , res)=>{

    const products = [
        {
            id : 1 , 
            label : "Product 1"
        } , 
        {
            id : 2 , 
            label : "Product 1"
        } , 
        {
            id : 3 , 
            label : "Product 1"
        } , 
        {
            id : 4 , 
            label : "Product 1"
        }
    ]
   
   const productId = parseInt(req.params.id) ; 
   const getproduct = products.find(product=>product.id === productId)
   if(getproduct){
    console.log('product found!') ; 
    res.json(getproduct) ; 
   }
   else{
    console.log('product not found') ; 
    res.send('product not found') ; 
   }
})

app.listen(port , console.log(`server running at the http://localhost:${port}`)) ; 