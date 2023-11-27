const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const products = [];
//   /admin/add-products => GET
router.get("/add-products", (req, res, next) => {
  console.log(`In Add-Products middleware`);
  // res.sendFile(path.join(rootDir, "views", "add-products.html"));
  res.render("add-products", { pageTitle: "Add products" });
});

//   /admin/add-products => POST
router.post("/add-products", (req, res, next) => {
  console.log(`In Products middleware`);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
