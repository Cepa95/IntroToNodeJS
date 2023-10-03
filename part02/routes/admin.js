const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    ProductCSS: true,
    activeAddProduct: true,
  });
});
//isti http moze biti koristen(add-product) ako su metode razlicite(GET,POST...).
router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.products = products;
