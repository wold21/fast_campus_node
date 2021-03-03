"use strict";

// ${}
// 함수, 변수, 문자열등 다 가능하다.
const details = "자세한 내용";
let str = "node.js";
console.log((str += ` 올인원 패키지 ${details}`));

const int = 1;
console.log((str += `${str}의 값은 ${int}`));

console.log`입력`;
