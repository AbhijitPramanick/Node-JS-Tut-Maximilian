const http = require("http");

const express = require("express");

const app = express();

//Following is a middleware, it will recieve a function, that will run on every incoming request
app.use((req, res, next) => {
  console.log(`You are in a middleware.`);
  next(); //this allows the request to continue to the next middleware bin line
});

app.use((req, res, next) => {
  console.log(`You are in another middleware.`);
  res.send(`<h1>Hello from express JS !</h1>`);
});

// const server = http.createServer(app);
//
// server.listen(3000);

app.listen(3000);
