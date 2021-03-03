"use strict";

class test {
  constructor() {
    this.config = {};
  }

  fn() {}

  // 클래스를 생성하지 않아도 클래스 내부에 접근해 실행 가능하다.
  // 그렇기에 생성자의 변수나 객체 등.
  // 어떠한 자료도 접근할 수 없다.
  static call() {
    console.log("called static method");
  }
}

// const Test = new test();
test.call(); // 호출이 된다.
