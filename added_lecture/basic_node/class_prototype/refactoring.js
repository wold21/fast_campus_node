// 코드는 동일한 기능을 해야하지만
// 모듈화와 유지보수를 쉽게 만든다는 것을
// 리팩토링이라고 한다.
// 클래스가 직관적이고 OOP방식의 프로그래밍이다.

"use strict";

class Fullstack {
  constructor(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;
  }
  getBackend() {
    return this.backend;
  }

  getFrontend() {
    return this.frontend;
  }

  setBackend(backend) {
    this.backend = backend;
  }

  setFrontend(frontend) {
    this.frontend = frontend;
  }
}

const fullstack = new Fullstack("javascript", "java");
console.log(fullstack.getBackend());
console.log(fullstack.getFrontend());
