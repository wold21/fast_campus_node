"use strict";

const promise1 = new Promise((resolve, reject) => resolve("즉시 호출"));
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("3초 뒤에 호출"), 3000);
});

// 모든 프로미스가 완료되기를 기다린다.
// 모든 작업의 완료를 보장 받을 수 있다.
Promise.all([promise1, promise2]).then((values) => console.log(values));
