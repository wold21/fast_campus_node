"use strict";
const fs = require("fs");
const { promisify } = require("util");

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

const writeAndRead = async (data = "") => {
  try {
    await write("filesystem/test.txt", data);
    // 줄여보자
    // const content = await read("test.txt");
    // return content;
    // 바로 리턴 처리함.
    // 함수이기 때문
    return await read("test.txt");
  } catch (e) {
    console.error(e);
  }
};

writeAndRead("something to write");

// 콜백 함수
// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const content = "something to write";
// fs.writeFile("testWrite.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("success");
// });
