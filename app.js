const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const errorController = require("./controller/error");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require(`./routes/admin`);
const shopRoutes = require(`./routes/shop`);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
const port = 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
