const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const products = [];
//   /admin/add-products => GET
router.get("/add-products", (req, res, next) => {
  res.render("add-products", {
    pageTitle: "Add Products",
    path: "/admin/add-products",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

//   /admin/add-products => POST
router.post("/add-products", (req, res, next) => {
  console.log(`In Products middleware`);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
