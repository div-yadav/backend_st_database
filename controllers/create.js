const Product = require("../models/product");

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, category, reviews } = req.body;
        const product = new Product({
            name, description, price, category, reviews
        });
        const savedProduct = await product.save();

        res.json({
            product : savedProduct,
        });
    } catch (error) {
        console.error("Error while creating new product:", error); // Log the error
        return res.status(400).json({
            error: "Error while creating new product",
        });
    }
};

exports.getAllProducts = async(req,res) => {
    try{
        const products = await Post.find({});
        res.json({
            products,
        })
    }
    catch(error){
        return res.status(400).json({
            error: "error while fetching product"
        })
    }
}
