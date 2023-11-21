const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  //   process.exit(); //Quitting your server, hard exiting event loop
});
server.listen(3000);
