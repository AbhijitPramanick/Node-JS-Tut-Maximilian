const express = require("express");

const router = express.Router();
router.get("/", (req, res, next) => {
  res.send(`<h1>Hello this is Express JS Shop. Welcome !</h1>`);
});
module.exports = router;
