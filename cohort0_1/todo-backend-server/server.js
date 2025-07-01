const express = require('express') ; 
const cors= require('cors') ; 
const app = express() ; 

const PORT = 8001 ; 

app.use(cors()) ;



let t_lst = [
    {
        title : "Drink luke warm water" , 
        description : "At 5 am"
    } , 
    {
        title : "Drink soup" , 
        description : "During breakfast"
    } , 
    {
        title : "watch movies" , 
        description : "every evening at 7 pm"
    } ,
    {
        title : "Dinner" , 
        description : "Everyday at the 8pm"
    } , 
    {
        title : "Watch Friends at 6pm" , 
        description : "At 8pm night"
    } , 
    {
        title : "Play and Practice guitar" , 
        description : "At the Evening"
    }
]

let payload_store = [] ; 

function updateTolst(){
    let n = t_lst.length ;
    const index = Math.floor(Math.random()*n) ; 
    payload_store.push(t_lst[index]) ; 
}

setInterval(updateTolst , 6000) ; 


app.get('/get-todo-data' , (req, res)=>{
    res.status(200).send(payload_store) ; 
})



app.listen(PORT , ()=>{
    console.log(`Server running at the ${PORT}\nvisit http://localhost:${PORT}`) ; 
})