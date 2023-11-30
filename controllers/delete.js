const Register = require("../models/product");

exports.deletion = async(req,res) =>{
    try{
        const {id} = req.params;
        await Register.findOneAndDelete({_id:id});
        res.json({
            success:true,
            message:"product Data removed."
        })
    }
    catch(err){
        console.error(err);
        response.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:err.message,
        })
    }
}


