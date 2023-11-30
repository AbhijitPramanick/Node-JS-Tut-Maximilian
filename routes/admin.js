const express = require("express");
const path = require("path");
const router = express.Router();
// const rootDir = require("../util/path");
const adminController = require(`../controller/admin`);

//   /admin/add-products => GET
router.get("/add-products", adminController.getAddProduct);

//   /admin/products => GET
router.get("/products",adminController.getProducts);

//   /admin/add-products => POST
router.post("/add-products", adminController.postAddProduct);

module.exports = router;
