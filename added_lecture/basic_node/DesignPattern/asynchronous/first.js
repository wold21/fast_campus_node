"use strict";

// db작업은 기본적으로 I/O작업이기 때문에 비동기 작업이 기본 전제이다.
// 생성자안에서는 비동기 코드를 사용할 수 없다.
// 그래서 pending상태의 코드를 생성자에서 변수에 할당해준다.
class DBManager {
  constructor(settings) {
    this.settings = settings;
    // init 초기화
    this.init = init;
    // Promise <Pending>된 상태의 객체를 변수로 할당하는 방법
    // Promise cache
    // 단 한번만 실행된다.
  }

  query() {
    // QUERY('') Agnostic
  }

  async init() {
    // DB접속 코드
    // 최초 1회 실행
  }

  async newMember() {
    // Pending
    // 여기서 해당하는 값이 리턴된다.
    // 위에서 할당한 Pending 상태의 init을 실제 실행되는 코드 단에서 호출한다.
    await this.init;
    // 한번 호출이 되어서 resolve가 된 Promise는
    // 두번이상 호출되지 않는다.
  }

  async deleteMember() {
    await this.init;
  }
}

// 정리하면 프로미스는 단일성을 보장한다.
// resolve는 1회만 보장된다.
// async await는 Promise의 확장이다.

// 하지만 이 코드에서는 await this.init;가 반복되는 모양을 가진다.
