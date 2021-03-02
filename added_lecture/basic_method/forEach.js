// forEach 내부에서 실행되는 코드들은
// 비동기로 진행되지 않는다.

"use strict";

const arr = [1, 2, 3];
const newArr = [];

arr.forEach((item) => {
  console.log(item);
  newArr.push(item);
});

console.log(newArr);
