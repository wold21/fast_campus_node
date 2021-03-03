"use strict";

// 현업에서 class를 쓰는 이유
// 캐쉬 매니저를 위해
// 아무리 많은 요청이 들어와도 클래스가 하나이기 때문에 (싱글턴)
// 부하가 적어진다.
class cacheManeger {
  // 비동기 불가능
  constructor() {
    this.config = [];
  }
}

const CacheManeger = new cacheManeger();
