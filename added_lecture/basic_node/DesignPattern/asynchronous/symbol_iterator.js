"use strict";

class Sample {
  // Computed Property
  // 계산 되어지는 함수
  // 지금은 배열로 정의했다.
  *[Symbol.iterator]() {
    let cnt = 0;
    yield cnt++;
  }
}

// const fn = new Sample();
// const gen = fn.gen();
// console.log(gen.next());
// console.log(gen.next());

console.log(Array.from(Sample));
