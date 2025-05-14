
// ugly way of doing the input validation  : 

const express = require("express") ; 

const app = express() ;

const PORT = 7003 ;

app.use(express.json()) ; 
app.use(express.urlencoded({ extended: true }));

app.post('/health-checkup' , (req , res)=>{
    if(req.body == undefined){
        res.status(400).json({
            msg : "Please fill the details"
        })
    }
    else{
        const kidneys = req.body.kidneys ;
        if(kidneys == undefined)
            {
                res.status(400).json({
                    msg : "Please use the key_name properly"
                })
                
            }
            else{
                if(kidneys || kidneys.length){
                    console.log(kidneys) ; 

                    const kidneyLength = kidneys.k_l.length ; 
                
                    res.send(`your kidney list length is ${kidneyLength} ` + `for kidney list ${kidneys.k_l}`) ; 
                    
                }
            }
 
    }
    

   
        
    
});

app.listen(PORT , ()=>{
    console.log(`App is running at the http://localhost:${PORT}`) ; 
})