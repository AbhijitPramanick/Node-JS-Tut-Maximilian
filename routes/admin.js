const express = require("express");

const router = express.Router();

router.get("/add-products", (req, res, next) => {
  console.log(`In Add-Products middleware`);
  res.send(
    `<html>
      <head>
        <title>Add products</title>
      </head>
      <body>
        <form action="/products" method="POST"><input type="text" name="message" placeholder="Enter
  Products"><button type="submit">Add</button></input></form>
      </body>
      </html>`
  );
});

router.post("/products", (req, res, next) => {
  console.log(`In Products middleware`);
  console.log(">>>>>>>>>", req.body);
  res.redirect("/");
});

module.exports = router;
