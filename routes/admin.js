const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

//   /admin/add-products => GET
router.get("/admin/add-products", (req, res, next) => {
  console.log(`In Add-Products middleware`);
  res.sendFile(path.join(rootDir, "views", "add-products.html"));
});

//   /admin/add-products => POST
router.post("/admin/add-products", (req, res, next) => {
  console.log(`In Products middleware`);
  console.log(">>>>>>>>>", req.body);
  res.redirect("/");
});

module.exports = router;
