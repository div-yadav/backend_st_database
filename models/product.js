const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        maxLength:225,
        required:true,
    },
    description:{
        type:String,
        maxLength:1000,
        required:true,
    },
    price:{
        type:Number,
        minValue:0,
        required:true,
    },
    catagory:{
        type:String,
        required:true,
    },
    review:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }] 
})

module.exports = mongoose.model("Product", productSchema);