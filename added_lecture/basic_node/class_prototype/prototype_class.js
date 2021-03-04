// 프로토 타입
// 기존의 객체에 함수를 바탕으로 새로운 함수를 만드는데에
// 편리하게 해준다.

"use strict";

function fullstack(backend, frontend) {
  this.backend = backend;
  this.frontend = frontend;

  // 함수 내부에 함수가 정의(prototype)되어있다.
  // Closure
  fullstack.prototype.getBackend = () => this.backend;
  fullstack.prototype.setBackend = () => (this.backend = backend);

  fullstack.prototype.getFrontend = () => this.frontend;
  fullstack.prototype.setFrontend = () => (this.frontend = frontend);
}

const Fullstack = new fullstack("javascript", "javascript");

const back = Fullstack.getBackend();
const front = Fullstack.getFrontend();
console.log(back, front);
