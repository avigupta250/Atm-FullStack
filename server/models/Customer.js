const { Schema } = require("mongoose");
const mongoose=require("mongoose");


const customerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    accountNumber:{
        type:Number
    },
    balance:{
        type:Number,
    },

})

module.exports=mongoose.model("Customer",customerSchema);