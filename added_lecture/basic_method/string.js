"use strict";

let string = "node.js 올인원 패키지";

let isStartWith = string.startsWith("n");
let isIncludes = string.includes(",");
let isEndWith = string.endsWith("지");

const checkIfContains = () => {
  if ((isStartWith && isEndWith) || isIncludes) {
    return true;
  }
};

const ret = checkIfContains();
console.log(ret);
