// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write(`<html>`);
//     res.write(`<header><title>Enter message</title></header>`);
//     res.write(
//       `<body><form action="/message" method="POST"><input type="text" name='message'><button type="submit">Send</button></form></body>`
//     );
//     res.write(`</html>`);
//     return res.end();
//   }
//   //Parsing request Bodies
//   if (url == "/message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody);
//       const message = parsedBody.split("=")[1];
//       fs.writeFileSync("Message.txt", message);
//     });
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     return res.end();
//   }

//   ///////Handling responses
//   res.setHeader("Content-Type", "text/html");
//   res.write(`<html>`);
//   res.write(`<header><title>Handling responses</title></header>`);
//   res.write(`<body><h1>Hello from Node.js server!</h1></body>`);
//   res.write(`</html>`);
//   res.end();
// });
// server.listen(3000);

/////////////////////////////////////////

//  Using the node Module system

// In Node.js, once a module is imported into a file using the require statement, the module's exports become read-only. This means that you cannot directly alter the content of the module after importing it into your main JS file.
// If you need to make changes to a module's content, you should export mutable values, such as objects or functions, and then modify those values.
const http = require("http");
const routes = require("./routes");
// const server = http.createServer(routes);
const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(3000);
