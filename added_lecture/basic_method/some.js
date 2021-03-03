"use strict";

// every는 모든것을 만족해야 하지만
// some은 한가지 이상만 만족하면 true이다.

const arr = [2, 1, 0, -1, -2];
const res = arr.some((key) => key < 0);
console.log(res);
