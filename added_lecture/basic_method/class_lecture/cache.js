"use strict";

class cacheManeger {
  constructor() {
    this.config = [];
  }

  addConfig(obj = {}) {
    this.config.push(obj);
  }

  getConfig() {
    return this.config;
  }
}

module.exports = cacheManeger;
