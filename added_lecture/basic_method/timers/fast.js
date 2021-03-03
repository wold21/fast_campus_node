"use strict";

// 최소 지연시간임.
// 안의 함수에 따라 지연될 수 있기 때문.

const timeoutObj = setTimeout(() => {
  console.log("first");
}, 0);

const immediateObj = setImmediate(() => {
  console.log("second");
}, 0);

const intervalObj = setInterval(() => {
  console.log("third");
}, 1000);

// 실행 순서는 그때마다 다르다.
// 할당해놓은 것을 해제 할 수도 있다.

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);
