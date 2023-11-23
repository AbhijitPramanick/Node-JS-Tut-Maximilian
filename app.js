// const http = require("http");

// const express = require("express");

// const app = express();

// // body-parser is a Node.js middleware that is used to parse the body of incoming HTTP requests. In the context of web development with Node.js, it is commonly employed to parse data from HTTP requests, especially when dealing with POST requests where data is sent in the body of the request.

// // Prior to Express version 4.16.0, body-parser was a separate npm package that developers had to install and include in their projects. However, starting from Express 4.16.0, the functionality provided by body-parser is included in the Express package itself. This means that for Express versions 4.16.0 and later, you don't need to separately install body-parser; you can use express.json() and express.urlencoded() middleware directly.

// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));

// //use() function can have multiple (i.e. more than one) paths and callbacks.
// //The order in which the middlewares are declared matters a lot
// // Not using next() here, will stop the request to flow to the second middleware, hence res.send() in the second middleware will not throw an error

// //If we want to add a middlware that will run for every incoming request, then we can add so, using next() method.

// app.use("/", (req, res, next) => {
//   console.log(`This always runs`);
//   next();
// });

// app.use("/add-product", (req, res, next) => {
//   console.log(`You are in add-product middleware.`);
//   res.send(
//     `<form action="/product" method="POST"><input type="text" name="product" placeholder="Add products here"><button type="submit">Add product</button></form>`
//   );
// });

// app.use("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });
// app.use("/", (req, res, next) => {
//   console.log(`You are in another middleware.`);
//   res.send(`<h1>Hello from express JS !</h1>`);
// });

// app.listen(3000);

// //////////////////////////////////////////////////

const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const adminRoute = require(`./routes/admin`);
const shopRoute = require(`./routes/shop`);

app.use(bodyParser.urlencoded({ extended: false }));

//Filtering Paths
app.use("/admin", adminRoute);
// So this filtering mechanism here in app.js allows us to put a common starting segment for our path which all routes in a given file use to outsource that into this app.js file so that we don't have to repeat it for all the routes here.
app.use(shopRoute);

//Following code is for handling 404 Page not found
app.use((req, res, next) => {
  console.log(`Middleware handling status 404 page`);
  res.status(404).send(`<h1>Status:404 Page not found</h1>`);
});
app.listen(3000);
