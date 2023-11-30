const express = require("express");
const router = express.Router();

const {createProduct, getAllProducts} = require("../controllers/create");
const {deletion} = require("../controllers/delete");



router.post("/api/products",createProduct);
router.delete("/api/products/:", deletion);
router.post("/api/products/:", getAllProducts);




module.exports = router;