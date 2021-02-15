const { response } = require("express");
// 내장모듈 http
const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" }); //  Head 문서 타입지정
    response.write("Hello Server");
    response.end();
  })
  .listen(3000); // 포트 3000

// http status code
// 1XX -> 조건부 응답
// 2XX -> 응답성공
// 3XX -> 리다이렉션
// 4XX -> 요청오류 (ex 404 Not Found)
// 5XX -> 서버오류
