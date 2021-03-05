// map 함수 내에선 async(비동기)를 쓰면 안된다.
// 실행 완료를 보장 받을 수 없다.
[Promise1, Promise2].map((item) => {
  // 비동기 코드
  // Promise가 어떻게 끝날지 모르기 때문에
  // Race Conditions이 발생할 수 있다.
});

// 마찬가지로 forEach도 안된다.
arr.forEach((item) => {
  // 비동기 x
});

// 해결방법은
// 임의의 프로미스 배열 선언
const arr = [Promise1, Promise2];

// for of 를 사용하면 된다.
for (const item of arr) {
  // 비동기 가능
}
