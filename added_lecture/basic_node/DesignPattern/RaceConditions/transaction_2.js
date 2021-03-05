// 은행계좌라는 상황

// 경쟁 상태를 만들지 않겠다.
class Lock {
    constructor() {
        // 내부에서만 사용할 변수
        this._locked = false;
        this._waiting = [];
    }

    // 잠그는 과정과 푸는 과정
    lock() {
        // 클로저 함수
        // lock을 파악하고 unlock한다.
        const unlock = () => {
            let nextResolve;
            if (this._waiting.length > 0) {
                nextResolve = this._waiting.pop(0);
                nextResolve(unlock);
                // lock안에 unlock이 같이 있는 이유는
                // unlock 검사하는 과정중에 대기열이 있다면 lock을 해줘야한다.
                // 반대인 경우엔 unlock도 해줘햐하고 그렇기 때문에 unlock을 내부적으로
                // 정의한다.
            } else {
                this._locked = false;
            }
        };
        if (this._locked) {
            return new Promise((resolve) => {
                this._waiting.push(resolve);
            });
        } else {
            // 락이 걸려있지 않으면
            this._locked = true;
            return new Promise((resolve) => {
                resolve(unlock);
            });
        }
    }
}

let total = 0;

async function getTotal() {
    return total;
}

async function setTotal(value) {
    return value;
}

// utilitie function
// in to add function
async function increment(value, incr) {
    return value + incr;
}

const account = new Lock();

async function add() {
    let current, newValue;
    // unlock되는 실행되는 시작점.
    unlock = await account.lock();

    // 트랜잭션 부분
    current = await getTotal();
    newValue = await increment(current, 20);
    await setTotal(newValue);

    await unlock();
}

async function main() {
    const transaction1, transaction2;
    transaction1 = add();
    transaction2 = add();

    await transaction1;
    await transaction2;

    console.log(await getTotal());
}
