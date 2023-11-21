///////// Importing a core module : global module
const http = require("http");

////////http.craeteServer will execute the following function for every incoming request

// function rqListener(req, res) {}

///////Creating a node server

// http.createServer(rqListener);

/////////We can also use an anonymous arrow function, instead for creating a seperate function
// http.createServer((req, res) => {
//   console.log(req);
// });

///// The above createServer method returns a server, hence has to be saved in a variable
const server = http.createServer((req, res) => {
  console.log(req);
});

/////The following listen method will keep running upon execution and will listen for incoming requests
server.listen(3000);
