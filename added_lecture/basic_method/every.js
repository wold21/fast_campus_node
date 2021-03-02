"use strict";

// every
// 조건이 모두 다 만족할 경우에 true를 반환한다.
// 웹개발을 할 때 모든 state에 해당할때의 행동에 대해서
// if문을 불필요하게 쓰지 않고 해결할 수 있다.

const arr = [2, 3, 4];
const isBiggerThenOne = arr.every((key) => key > 1);
console.log(isBiggerThenOne);
