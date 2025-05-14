const mongoose = require('mongoose') ; 
mongoose.connect("mongodb+srv://iambeavernoob:LOQS9LD6clobKev4@cluster0.our5lop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(console.log('mongodb database connected..'))
.catch((e)=>{
    console.log('This is the error ' , e) ; 
})


const userSchemma = new mongoose.Schema({
    name : String , 
    email : String , 
    age : Number , 
    isActive : Boolean , 
    tags : [String] , 
    createdAt : {type : Date , default : Date.now()}
}) ;

// create user-model : 
const User = mongoose.model('User' , userSchemma) ; 

/*

const User = mongoose.model('User' , userSchemma) ;

You're creating a Mongoose Model named User using the schema you just defined.

mongoose.model() connects the schema with a MongoDB collection.

The first argument 'User' becomes the collection name in MongoDB as 'users' (Mongoose automatically makes it plural and lowercase).


*/



async function runQueryExamples(){
    try{

        // 1. create a new document : This method helps us to create new user in the database 

        // method 1 : Creation of ther user.

        // const newUser = await User.create({
        //     name : 'harry potter' , 
        //     email : 'potter@gmail.com' , 
        //     age : 56 , 
        //     isActive : true,
        //     tags : ["dark-magic" , "snake-language" , "backend-developer"] , 
        // }) ; 

        /*
            In this method User.create({}) internally calls the the .save() function so no need to call the save() function although calling .save() not affect the code but we should avoid using
            it redundantly to make the code readable or less messy
        
        */


       // method 2: creation of the user

    //     const newUser = new User({
    //         name : 'shreya singh kshatriya' , 
    //         email : 'shreya@gmail.com' , 
    //         age : 22 , 
    //         isActive : true, 
    //         tags : ["developer" , "ML engineer" , "backend-developer"] , 
    //     }) ; 
        
    //   console.log('user schemma successfully created ' , newUser) ;
    //   const savedDoc =  await  newUser.save() ; 
    //   if(savedDoc == newUser){
    //     console.log('document saved successfully')
    //   }
    //   else{
    //     console.log('document not saved succesfully')
    //   }


       // 2. find all the user in the database : 
    //    const allUsers = await User.find({}) ;
    //    console.log(allUsers) 
       

       //3. find specific user :
    //    const getUserofActiveisFALSE = await User.find({
    //     isActive:false
    //    })
    //    console.log(getUserofActiveisFALSE)

    // 4. findOne method : That finds the first document that matches the criteria
    // const getJohnDoeUser = await User.findOne({
    //     name : "john doe"
    // })
    // console.log(getJohnDoeUser) ; 


    //5. get user by id : 

    // const getLastCreatedUserByUSERID = await User.findById(newUser._id);
    // console.log(getLastCreatedUserByUSERID) ; 


    //6. get last created user : 

    // const allUsers = await User.find({}) ;
    // const getLastCreatedUserByUSERID = allUsers[allUsers.length-1] ; 
    // console.log(getLastCreatedUserByUSERID) ; 

    //7.  find the user data based on the id : 

    // const findUserofID = await User.find({
    //     _id  : "681633f19d3fcb7423ec5f24"
    // })
    
    // console.log(findUserofID)


    //8. selecting the specific field : 


    // const selectedFields = await User.find().select('name email -_id')   // '-' symbol used to exclude the certain fields
    // console.log(selectedFields)

    /*
        ⚠️ When you only include specific fields, everything else is automatically excluded — unless you explicitly include them.

        🧠 So your query works like this:
        “Hey MongoDB, return only name and email fields, and exclude _id. Ignore all other fields.”

        That’s why:

        isActive, age, tags, createdAt, etc. are not shown

        You didn’t exclude them directly, but you chose what to include, which implicitly leaves the rest out


    
    
    */

   //9 . limiting and the skipping of the user : 
//    const allusers = await User.find({}) ;
//    const collectionsize = allusers.length ;

//    const limitedUsers = await User.find().limit().skip(collectionsize-1)

//    const limitedUsers = await User.find().limit(5).skip(2)
//    console.log(limitedUsers) ; 

   /*
   
        User.find()
        This fetches all documents in the User collection.

        It returns a query object that you can chain with more operations (like limit or skip).

        🟨 .limit(5)
        This tells MongoDB:

        "Return at most 5 documents."

        It limits the result to 5 user records, no matter how many total exist.

        🟧 .skip(2)
        This tells MongoDB:

        "Ignore the first 2 documents, then start returning."

        Useful when you're implementing pagination (e.g., page 2 = skip 10, limit 10).


        limit(5) returns the documents in the insertion order according to the timestamps it contains.

   */


    //9. sorting of the user document : 
    // const sortedUsersDSC = await User.find().sort({age : -1}) ; 
    // passing -1 in the age does the sorting in the descending order according to the given age.

    // const sortedUsersASC = await User.find().sort({age : 1}) ; 
    // passing 1 in the age does the sorting in the ascending order according to the given age.
    // console.log(sortedUsersDSC , sortedUsersASC) ; 


    //10 .find the documentsize : 
    // const countDocument = await User.countDocuments({isActive:false})
    // console.log(countDocument) ; 


    // 11. delete the user from the database : 

    // const deletedUser = await User.findByIdAndDelete({_id : "68179c34e4aea78e7e53676c"})
    // console.log('deleted user : ' ,deletedUser)


    //12 . update the user in the database : 

    const updateUser = await User.findByIdAndUpdate({_id : "681793a4b9fa8aeb8f42b870"} , {
        $set:{age : 100 , email: "hermoine@gmail.com"} , $push: { tags: { $each: ['engineer'] } }
        , 
    } , {new : false}) ; 

    console.log('updated user : ' , updateUser) ;












    }
    catch(e){
        console.log('error is :' , e) ;  
    }
    finally{
        await mongoose.connection.close() ; 
    }
}

runQueryExamples() ; 
