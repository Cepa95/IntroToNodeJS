const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");

const productController = require("../controllers/products");

const router = express.Router();

// /admin/add-product
router.get("/add-product", productController.getAddProduct);
//isti http moze biti koristen(add-product) ako su metode razlicite(GET,POST...).
router.post("/add-product", productController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;
