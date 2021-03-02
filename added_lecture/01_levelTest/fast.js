// 'use strict'

const obj = {
    title: 'node.js 올인원 패키지',
};

// if
// if (obj.title) {
//     return true;
// } else {
//     return false;
// }

// obj에 title이 있는지 확인하는 함수
// function isEmptyObj() {
//     if (obj.title) {
//         return true;
//     } else {
//         return false;
//     }
// }

// 위 함수를 arrowFunction으로 만들기
const isEmptyObj = () => (obj.title ? true : false);

isEmptyObj();
