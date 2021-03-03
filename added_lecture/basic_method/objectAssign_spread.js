"use strict";

// object assign
// assign = 할당
// 새로운 객체를 생성하기도 하고
// 두개의 객체를 합쳐서 하나의 객체로 만들기도 함.

const obj = {
  title: "node.js 올인원 패키지",
};

const newObj = {
  name: "패스트 캠퍼스",
};

// const ret = Object.assign({}, obj, newObj);
// console.log(ret);

// spread
// 객체뿐만 아니라 배열에도 사용할 수 있다.
// ...으로 사용한다.

// 객체로 사용
const ret = {
  ...obj,
  ...newObj,
};
console.log(ret);

// 배열에 사용
const arr = [1, 2, 3];
const brr = [4, 5, 6];

const rat = [...arr, ...brr];
console.log(rat);
