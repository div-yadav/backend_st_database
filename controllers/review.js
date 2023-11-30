const express = require("express");
const Product = require("../models/product"); 
const Review = require("../models/review");

router.post("/products/:productId/reviews", async (req, res) => {
  try {
    const { content, rating, author } = req.body;
    const productId = req.params.productId;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const review = new Review({
      content,
      rating,
      author,
      createdAt: new Date(),
    });

    product.reviews.push(review);

    await product.save();

    await review.save();

    res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
