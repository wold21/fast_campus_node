// Curried Function

// function getDiscount(price, rate) {
//   return price * rate;
// }

// getDiscount(10000, 0.5);

// const getDiscount = (price, rate) => price * rate;

// const gold = 0.3;
// const silver = 0.2;
// const bronze = 0.1;

// getDiscount(10000, gold);

// 솔루션
// Closure
// 내부함수 선언 price에 대해서 함수를 선언한다.

// 합성함수
// f(x) = x + 1
// g(x) = x^2
// h(x) = f(g(x))

const getDiscount = (rate) => (price) => rate * price;
const getTenpercentOff = getDiscount(0.1);
// 위에 한번 선언을 해놓으면 그 다음 인자(price)만 써주면
// 0.1이 계속 적용된다.
getTenpercentOff(10000);

// var sulution = function getDiss(rate) {
//   return function (price) {
//     return rate * price;
//   };
// };
