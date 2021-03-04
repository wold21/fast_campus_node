"use strict";

const numbers = [0, 1, 2, 3, 4, 5, 6];

// 마지막에 값을 추가해주면 그 형태로 값이 들어간다.
// 예를들면 배열형태 []
// reduce를 통해 하나씩 모두 돌면서 0을 제외한 값이 새로운 배열에 작성된다.
const res = numbers.reduce((total, amount) => {
  if (amount > 0) total.push(amount);
  return total;
}, []);

console.log(res);

// 어떤 값이 몇번 반복 되었는지.
const arr = ["pdf", "html", "html", "pdf", "gif", "gif", "gif"];

const checkResult = arr.reduce((cnt, fileType) => {
  if (cnt[fileType]) {
    cnt[fileType]++;
  } else {
    cnt[fileType] = 1;
  }
  return cnt;
}, {});

console.log(checkResult);

// solution
const solution = arr.reduce((cnt, fileType) => {
  // 계산을 시작할때 초기화가 안되어있으면 undefined가 되기때문에
  // || 0으로 초기화를 시킨다.
  cnt[fileType] = (cnt[fileType] || 0) + 1;
  return cnt;
}, {});

console.log(solution);
