"use strict";

// yield
// 해당하는 조건이 '실행 될때' 값을 반환함
// return

//*을 달아서 제너레이터 명시
function* log() {
  console.log(0, yield);
  console.log(1, yield);
  console.log(2, yield);
}

const gen = log();
gen.next("zero");
gen.next("first");
gen.next("second");
gen.next();
