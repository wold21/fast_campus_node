"use strict";

// set
// 중복이 불가함.

const test = new Set();
test.add(1);
test.add(2);
test.add(3);
test.add(1);
test.add(2);

for (const item of test) {
  console.log(item);
}
// 데이터가 중복되지 않는다.

// 존재하는지 확인 할때
// .has
const ret = test.has(2);
console.log(ret);
