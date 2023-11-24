const express = require("express");
const path = require("path");
const router = express.Router();

//   /admin/add-products => GET
router.get("/add-products", (req, res, next) => {
  console.log(`In Add-Products middleware`);
  res.sendFile(path.join(__dirname, "../", "views", "add-products.html"));
});

//   /admin/add-products => POST
router.post("/products", (req, res, next) => {
  console.log(`In Products middleware`);
  console.log(">>>>>>>>>", req.body);
  res.redirect("/");
});

module.exports = router;
