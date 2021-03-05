"use strict";

// 생성자를 포기하고 static함수로 생성자를 대신하는 모양을 만든다.
class DBManager {
  constructor() {}

  // static 비동기 함수 선언
  // 관습적으로 이 함수를 빌드라 부르고 대문자로 작성
  static async BUILD(settings) {
    // 초기화를하고 init이 여기서 한번 실행된다.
    const config = await this.init(settings);
    // 수행하고자 하는 모든 비동기 작업.
    return new DBManager(config);
  }

  query() {
    // QUERY('') Agnostic
  }

  async init() {} // 최초 1회 실행

  async newMember() {}

  async deleteMember() {}
}

// static 함수이기에 생성하지 않고 함수를 사용할 수 있다.
const manager = DBManager.BUILD(settings);
