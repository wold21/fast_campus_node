"use strict";

// reduce!!!

const numbers = [10, 20, 30, 40];

// 모든 배열의 숫자를 하나하나 더한다.
const sum = numbers.reduce((total, val) => total + val);

//  값을 더하고 평균을 내본다.
// 차례대로 누적값, 현재값, 인덱스, 요소
const avg = numbers.reduce((total, val, index, arr) => {
  total += val;
  if (index === arr.length - 1) {
    return total / arr.length;
  } else {
    return total;
  }
});

console.log(sum);
console.log(avg);
