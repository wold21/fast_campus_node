// 두가지 이상 exports
function edit() {}
function write() {}

module.exports = {
  edit,
  write,
};

// 한가지 이상 exports
class update {}

module.exports = update;

// 환경을 세팅해 줄 수도 있다.
// 함수도 인라인으로 가능하다.
module.exports = {
  id: "",
  toten: "",
  fn: () => {
    console.log("inline exports");
  },
};
