"use strict";

const obj = {
  title: "node.js",
  value: " 올인원 패키지",
};

// Destructuring
const { title, value } = obj;

// 예전 방식
// const title = obj.title;
// const value = obj.value;
console.log(title + value);

// 배열을 비구조화
const arr = [0, 1, 2];
const [, a, b] = arr;
console.log(a, b);
