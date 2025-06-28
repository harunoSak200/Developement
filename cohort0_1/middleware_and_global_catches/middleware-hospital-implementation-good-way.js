// To do the same hospital implementation we can do it much better using the middleware : 

// This is the dumb way of doing the input validation and the authentication : 



const express = require("express");
const app = express();
const PORT = 7002;


// to handle the regular json paylods  use this url: 
app.use(express.json()) ; 

// to handle the regular html form data payload use this : 
app.use(express.urlencoded({ extended: true }));

// you can use both the middlewares simultaneously in order to process the data without any error .



// implementing the rate limitter middleware that will regulates the no. of the request per user.
let cnt = 0 ; 

function ratelimitter(req , res , next){
    if(cnt == 3 ){
        res.status(400).send({
            msg:"Your request limit exceeded , Please try with our premium feature where you can send 10000 requests."
        })
    }
    else next() ; // next only controls that it will gives controls to next middleware or the routes
}

function userMiddleware(req , res , next){

    const username = req.headers.username ; 
    const password = req.headers.password ; 

    if (username !== "aditya" || password !== "pass1502") {
        return res.status(403).json({
            msg: "User doesn't exist"
        });
    }
    else{
        next() ; 
    }
    
}

function kidneyMiddleware(req , res , next){

    console.log(req.query) ; 
    const kidneyId = parseInt(req.query.kidneyId) ; 
    console.log(typeof kidneyId) ; 
    if (kidneyId !== 1 && kidneyId !== 2) {
        return res.status(411).json({
            msg: "Wrong inputs for the kidneys"
        });
    }
    else next() ; 
    
}


/*app.use(middleware) implements the ratelimitter middleware in the each and the every routes , each and the every routes has to pass through this middleware first then the remainning middleware and the routes will 
execute

NOTE :If you want to get this middleware executed before each and the every routes then write app.use(ratelimitte) in the beginning of the route-handler only.
*/

app.use(ratelimitter) ;  

app.get("/health-checkup",userMiddleware , kidneyMiddleware , (req, res) => { 
    cnt++ ; 
    res.send("Your kidney is healthy");
    
});


/* if I use this middleware here then it will not affect the '/health-checkup' */
// app.use(ratelimitter) ;  

app.get("/kidney-check" ,userMiddleware , kidneyMiddleware , (req , res)=>{
    cnt++ ; 
    res.send({
        msg : "Checking done! , Your kidney is fine no need any medication"
    })
})

app.get("/heart-check" ,userMiddleware , (req ,res)=>{
    cnt++ ; 
    res.send({
        msg : "Your heart is fine"
    })
})

app.get("/donate-kidney" ,kidneyMiddleware , userMiddleware , (req , res)=>{
    cnt++ ; 
    res.send({
        msg : "Your can do the kidney transplant"
    })
})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});


/* we can change the order of the calling of the middleware in order to 
change the order of the processing of the middleware according to the different use. */
