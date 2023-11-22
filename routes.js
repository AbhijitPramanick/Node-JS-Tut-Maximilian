const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(`<html>`);
    res.write(`<header><title>Enter message</title></header>`);
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name='message'><button type="submit">Send</button></form></body>`
    );
    res.write(`</html>`);
    return res.end();
  }
  //Parsing request Bodies
  if (url == "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("Message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  ///////Handling responses
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>`);
  res.write(`<header><title>Handling responses</title></header>`);
  res.write(`<body><h1>Hello from Node.js server!</h1></body>`);
  res.write(`</html>`);
  res.end();
};

// module.exports = requestHandler;

//We can export many things at a time
// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };

//Alternative
// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text 2";

// shortcut
exports.handler = requestHandler;
exports.someText = "Some hard coded text 3";
