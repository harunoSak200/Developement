 
 // ugly way of doing the input validation  : 
 
 const express = require("express") ; 
 
 const app = express() ;
 
 const PORT = 7004 ;
 
 app.use(express.json()) ; 
 app.use(express.urlencoded({ extended: true }));
 
 app.post('/health-checkup' , (req , res)=>{
     
         const kidneys = req.body.kidneys ;
         const kidneyLength = kidneys.k_l.length ; 
        res.send(`your kidney list length is ${kidneyLength} ` + `for kidney list ${kidneys.k_l}`) ; 
});

// applying the global catches : error  handling middleware express recongnizes as an error handling middleware.

/* It allows us to do the catch the errors that occurs during the 
input validation by user , user are completely unware of the backend
system and in that case if they put random things and our server are 
not optimized to handle those cases then it will throws some error , 
sometimes hacker use this technique of injection to easily get the 
vulnerable loop holes in the website

NOTE : $$$$$$$$$$$$$$ VERY VERY IMPORTANT $$$$$$$$$$$$$$$4444
Yes, it is functionally required to place the global error handler at the end of your middleware stack.
🔧 Why?
Express middleware and routes are executed in the order they’re defined. That includes:

app.use() (middleware)

app.get() / app.post() (routes)

app.use(errHandler) (error handlers)

If your global error-handling middleware comes before your routes or other middleware, then:

Express will never reach the error handler unless a route above explicitly passes an error to next(err).

Errors thrown after it won't be caught by it — because it has already been skipped.

*/

app.use((err , req , res , next)=>{
    res.status(403).send({
        msg:`something is wrong ${err}` 
    })
})
 
 app.listen(PORT , ()=>{
     console.log(`App is running at the http://localhost:${PORT}`) ; 
 })