// 가장 먼저 resolve된 프로미스가 리턴되는 특징이 있다.

"use strict";

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise 1"), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise 2"), 0);
});

Promise.race([promise1, promise2]).then((values) => console.log(values));
