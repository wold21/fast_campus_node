"use strict";

// 항상 기존의 값이 새로운 값으로 반환된다는 것을 명심해야함.
// 새로운 변수에 할당해서 사용을 해야 적용이 된다.

// find 값을 찾고 있으면 값을 보여준다.
// includes는 true false를 반환한다.
// 값을 얻고 싶으면 find
// 값을 확인하고 싶으면 includes

const arr = ["node.js", "AllinOne"];

const ret = arr.find((key) => key === "node.js");
const res = arr.includes("node.js");

console.log(ret);
console.log(res);
