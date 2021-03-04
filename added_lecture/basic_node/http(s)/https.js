// HyperText Transfer Protocol Secure
// 해당하는 모든 데이터 트랜잭션이 암호화가 됨.

"use strict";

const https = require("https");
const options = {
  hostname: "google.com",
  port: 443, // 일반적인 포트넘버
  path: "/login",
  method: "GET", // CREATE(POST) READ(GET) UPDATE(PUT) DELETE
};

const req = https.request(options, (res) => {
  console.log(`statusCode : ${res.statusCode}`);

  res.on("data", (data) => {
    process.stdout.write(data);
  });

  req.on("error", (err) => {
    console.log(err);
  });
});

req.end();
