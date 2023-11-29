const express = require("express");
const path = require("path");
const router = express.Router();
// const rootDir = require("../util/path");
const productController = require(`../controller/products`);
//   /admin/add-products => GET
router.get("/add-products", productController.getAddProduct);

//   /admin/add-products => POST
router.post("/add-products", productController.postAddProduct );

module.exports = router;
