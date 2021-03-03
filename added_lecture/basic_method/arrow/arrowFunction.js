"use strict";

// // 1.
// function add(var1, var2) {
//   return var1 + var2;
// }

// // 2.
// const add = function add(var1, var2) {
//   return var1 + var2;
// };

// // 3.
// const add = add(var1, var2) => {
//     return var1 + var2;
//   };

// // 4.
// const add = (var1, var2) => var1 + var2;
// console.log(add(1, 2));

// 일반적으로 사용되는 this와는 달리 arrowfunction은
// 본인의 컨텍스트를 고려하지 않고 글로벌 객체의 this를 사용한다.

// after
API.prototype.get = function (resource) {
  var self = this;
  return new Promise(function (resolve, reject) {
    http.get(self.uri + resource, function (data) {
      resolve(data);
    });
  });
};

// before
// var로 변수를 잡아놨던 API.prototype.get의 this를 없앨 수 있다.
API.prototype.get = (resource) => {
  new Promise((resolve, reject) => {
    http.get(this.uri + resource, (data) => {
      resolve(data);
    });
  });
};
