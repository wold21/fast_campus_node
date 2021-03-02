// QUEUE
// FIFO

const queue = [];
queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue); // [1, 2, 3]
console.log(`큐의 길이 : ${queue.length}`);

// shift 첫번째 요소를 제거하고 반환한다.
const r = queue.shift();
console.log(r); // 1
console.log(queue); // [2, 3]

//----------------------------------------------------------------------
console.log("-----------------------------------------------------");

// STACK
// LIFO

const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

// 마지막 요소를 제거하고 반환한다.
var s = stack.pop();
console.log(s);
