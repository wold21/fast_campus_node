// IIFE
// 즉시 실행 되는 함수
// Immediately Invoked Function Expression
// https://developer.mozilla.org/ko/docs/Glossary/IIFE

// 예시
(function () {
  var lang = "js";
})();
// console.log(lang); // 사용할 수 없다.

// 괄호로 쌓여진 익명함수이다.
// 전역 스코프에 불필요한 변수를 추가해서
// 오염시키는 것을 방지할 뿐만아니라
// IIFE 내부 안으로 다른 변수들이 접근하는 것을
// 막을 수 있는 방법이다.

// 예시 2
var r = (function () {
  var lang = "js";
  return lang;
})();

// 변수에 담아 사용하게 되면 함수가 실행된 '결과'를 변수에 저장하게 된다.
console.log(r);
