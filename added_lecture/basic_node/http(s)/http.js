"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); // 어떠한 content를 받을 것인가.
  res.end("<div>Hello World</div>");
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`server running at port ${port}`);
});
