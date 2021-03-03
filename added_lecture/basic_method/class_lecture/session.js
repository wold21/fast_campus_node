const cacheManeger = require("./cache");

class sessionManeger extends cacheManeger {}

const SessionManeger = new sessionManeger();
SessionManeger.addConfig({
  token: "ran",
});

const config = SessionManeger.getConfig();
console.log(config);
