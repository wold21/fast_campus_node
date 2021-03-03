// 어떤 특정 이벤트가 발생했을 때 일괄적으로
// 코드를 실행 할 수 있도록 하는 코드 작성법

"use strict";

const EventEmitter = require("events");

class ChatManeger extends EventEmitter {}

const chatManager = new ChatManeger();

// on
// 특정한 이벤트가 발생 했을 때 임의의 이벤트에 대해 선언하는 기능
chatManager.on("join", () => {
  console.log("new user joined");
});

// emit
// 선언한것을 호출한다.
chatManager.emit("join");
