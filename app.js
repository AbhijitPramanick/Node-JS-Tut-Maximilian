const http = require("http");

const server = http.createServer((req, res) => {
  ///////Handling responses
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>`);
  res.write(`<header><title>Handling responses</title></header>`);
  res.write(`<body><h1>Hello from Node.js server!</h1></body>`);
  res.write(`</html>`);
  res.end();
});
server.listen(3000);
