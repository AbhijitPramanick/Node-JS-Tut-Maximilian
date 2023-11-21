const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req); // This req object is an object that Node JS created for us with all the incoming data, when we visited the localhost:3000

  //It contains Headers that are metadata, added to a request and also to response

  console.log(req.url, req.method, req.headers);
});
server.listen(3000);
