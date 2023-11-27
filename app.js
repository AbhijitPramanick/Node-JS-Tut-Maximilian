const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require(`./routes/admin`);
const shopRoutes = require(`./routes/shop`);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  console.log(`Middleware handling status 404 page`);
  res.status(404).render("page404", { pageTitle: "Page not found" });
});

app.listen(3000);
