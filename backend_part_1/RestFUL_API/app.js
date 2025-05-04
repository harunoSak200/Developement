const e = require('express');
const express = require('express')
const app = express() 
const port = 8000 ;

// middleware : 

app.use(express.json()) ;
app.use(express.urlencoded({ extended: true })) ;
 

let books = [
    {
        id : 1 , 
        title : "Book 1"
    } , 
    {
        id : 2 , 
        title : "Book 2"
    } , 
    {
        id : 3 , 
        title : "Book 3"
    } , 
    {
        id : 4 , 
        title : "Book 4"
    } , 
    {
        id : 5 , 
        title : "Book 5"
    } , 
] ; 

// Get all the books : 
app.get('/' , (req , res)=>{
    res.send({msg : "welcome to our bookstore api"})
})

app.get('/get-books' , (req , res)=>{
    res.json(books)
})

// get a single book : 
app.get('/get-books/:bookid' , (req ,res)=>{
    const bookId = parseInt(req.params.bookid) ;

    const book = books.find(item => item.id === bookId) ;
    if(book){
        res.status(200).send({
            msg:"book found!"
        })
    }
    else {
        res.status(400).send({
            msg:"book not found in the store"
        })
    }
})

// add a new book :
app.post('/add-book' , (req , res)=>{
    const newBook = {
        id : books.length+1 , 
        title : `Book ${books.length+1}`
    }
    books.push(newBook) ;
    res.status(200).send({
        msg : "New book is addded as per the given request.."
    })
})

// update a book : 
app.put('/update/:id' , (req , res)=>{

    const id_requested = parseInt(req.params.id) ; 
    const findCurrentBook = books.find(bookItem=>bookItem.id === id_requested)
    console.log(findCurrentBook)


    if(findCurrentBook)
    {
        console.log(req.body) ; 
        findCurrentBook.title = req.body.title || findCurrentBook.title 
        res.status(200).send({
            msg : `Book with ID ${req.params.id} updated successfully` , 
            data : findCurrentBook
        })

    }
    else {
        res.status(400).send({
            msg : "books not found!"
        })
    }
})

app.delete('/delete/:id' , (req , res)=>{
    const id_requested = parseInt(req.params.id) ; 
    console.log(id_requested)
    const findBookid = books.findIndex(bookItem=>bookItem.id === id_requested) ;   
    // findIndex returns the -1 if particular index is not present
    console.log(findBookid)
    if(findBookid > 0){
        const deletedBook = books.splice(findBookid , 1)
        res.status(200).send({
            msg : "book deleted successfully" , 
            data : deletedBook[0]
        })
    }
    else{
        res.status(400).send({
            msg : "book requested from the id not found" 
        })
    }
})


app.listen(port , console.log(`App running on the http://localhost:${port}`)) ;
