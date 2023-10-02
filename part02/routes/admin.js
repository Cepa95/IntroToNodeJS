const path = require("path");

const express = require("express");

const rootDir = require('../util/path')

const router = express.Router();


// /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
//isti http moze biti koristen(add-product) ako su metode razlicite(GET,POST...).
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
