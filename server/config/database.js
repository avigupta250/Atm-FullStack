const mongoose=require("mongoose");
require("dotenv").config();


const connectDB=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    }).then(()=>{
        console.log("Database Connection Successfull")
    }).catch((error)=>{
        console.log("Connection failed with DB");
        console.error(error);
    })
}
module.exports=connectDB;