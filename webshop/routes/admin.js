const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");

const adminController = require("../controllers/admin");

const router = express.Router();

///admin/add-product
router.get("/add-product", adminController.getAddProduct);
//isti http moze biti koristen(add-product) ako su metode razlicite(GET,POST...).
router.post("/add-product", adminController.postAddProduct);
// //admin/products => get
// router.get('/products', adminController.getProducts);

// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/edit-product/', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;
