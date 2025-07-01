const express = require('express') ; 
const jwt = require("jsonwebtoken") ; 
const jwtPassword = "123456" ;

const app = express() ; 

app.use(express.json()) ; 

const PORT = 7001 ;

const ALL_USERS =[ 
    {
        username : "harikirat@gmail.com" , 
        password : "123" , 
        name : "harkirat singh"
    } ,
    {
        username : "ikirat@gmail.com" , 
        password : "123sdf" , 
        name : "harkt singh"
    } , 
    {
        username : "rat@gmail.com" , 
        password : "123sdf" , 
        name : "hart sgh"
    } , 
    {
        username : "ha@gmail.com" , 
        password : "12358468468sdf" , 
        name : "hsingh"
    }
]


function userExists(username , password){
   let userExists = false ; 
   for (let i = 0 ; i < ALL_USERS.length ; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true ; 
            break;
        }
   }
   return userExists ; 
}

app.post('/signin' , (req , res)=>{

    const username = req.body.username ; 
    const password = req.body.password ; 

    if(!userExists(username , password)){
        
        return res.status(403).json({
            msg : "Use doesn't exist in our memory in db"
        }) ;
    }

    var token = jwt.sign({username : username} , jwtPassword) ; 
    return res.json({
        token , 
    }) ; 
}) ; 
+
app.get("/users" , (req , res)=>{
    const token = req.headers.authorization ; 
    try{
        const decoded = jwt.verify(token , jwtPassword) ; 
        const username = decoded.username ; 
        res.status(200).json({
        //    ALL_USERS

        // return the users other than the username : 
            users : ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false ; 
                }
                else { 
                    return true ; 
                }
            })
        })
    }
    catch(err){
        return res.status(403).json({
            msg : 'invalid token'
        })
    }
})


app.listen(PORT , ()=>{
    console.log(`visit http://localhost:${PORT}`)
})