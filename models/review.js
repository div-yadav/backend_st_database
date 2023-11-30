const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    content:{
        type:String,
        maxLength:500,
        required:true,
    },
    rating:{
        type:Number,
        minValue:1,
        maxValue:5,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date.now(),
        required:true,
    }
})

module.exports = mongoose.model("Review", reviewSchema);