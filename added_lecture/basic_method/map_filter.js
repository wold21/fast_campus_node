"use strict";

// map
// 배열내의 모든 요소에 대하여 주어진 함수를 호출한 결과에 따라
// 새로운 배열을 만듬.

const a = [1, 2, 3];
const b = a.map((x) => x + 1);

console.log(a);
console.log(b);

// filter
// 주어진 함수에 테스트를 통과한 데이터를 모아 새로운 배열을 만듬.

const aF = [1, 2, 3];
const bF = a.filter((x) => x > 1);

console.log(bF); // [2, 3]
