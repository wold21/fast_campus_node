"use strict";

// singleton pattern
class CacheManager {
  constructor() {
    // 만약 캐쉬 매니저의 인스턴스가 없을 경우
    // this를 초기화 해주고 캐쉬매니저의 인스턴스로 this를 넘겨준다.
    if (!CacheManager.instance) {
      this._cache = [];
      CacheManager.instance = this;
    }
    return CacheManager.instance;
  }
}

const instance = new CacheManager();
Object.freeze(instance);
