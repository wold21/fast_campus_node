// Memory Leaks 상황
// 1. 메모리와 힙과 스택 상에서 불필요한 메모리 정보를 계속 보존하고 누적하는 경우
// 2. 메모리할당은 되었지만 이후 비할당과정을 생략했을 경우

function study(v1, v2) {
  this.v1 = v1;
  this.v2 = v2;

  // prototype 없이
  // 1. arrow함수를 썼기에 접근이 가능하지만 -> arrow의 this는 글로벌을 가르키기 때문.
  // 2. 객체를 생성하고도 확인 할 수 있다.
  // 3. 리퀘스트 마다 프로토타이핑된 함수가 호출되는데 아래의 함수는 비할당이 안되기 때문에 메모리 누수가 된다.
  // 4. 아래와 같은 함수처럼 사용하려면 일일히 비할당을 해줘야한다.
  this.func1 = () => {
    console.log("test");
  };
}

const problem = new study(undefined, undefined);
console.log(problem.func1());
