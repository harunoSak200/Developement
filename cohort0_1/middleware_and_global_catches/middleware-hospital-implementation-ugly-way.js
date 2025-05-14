// This is the dumb way of doing the input validation and the authentication : 

const express = require("express");
const app = express();
const PORT = 7002;

function userMiddleware(req , res , next){
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
    if (kidneyId !== 1 && kidneyId !== 2) {
        return res.status(411).json({
            msg: "Wrong inputs for the kidneys"
        });
    }
    else next() ; 
    
}

app.get("/health-checkup", userMiddleware , kidneyMiddleware , (req, res) => { res.send("Your kidney is healthy");
});

app.get("/kidney-check" , userMiddleware , kidneyMiddleware , (req , res)=>{
    res.send({
        msg : "Checking done! , Your kidney is fine no need any medication"
    })
})
app.get("/heart-check" , userMiddleware , (req ,res)=>{
    res.send({
        msg : "Your heart is fine"
    })
})
app.get("donate-kidney" , kidneyMiddleware , userMiddleware , (req , res)=>{
    res.send({
        msg : "Your can do the kidney transplant"
    })
})


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
