const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({p1_text: "p1의 텍스트"});
    }, 1000)
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("error");
    }, 3000)
})

// // 순차진행 
// p1.then((result1) =>{
//     console.log("p1 = " + result1.p1_text);
//     return p2;
// }).then((result2)=>{
//     console.log("p2 = " + result2.p2_text);
// })

// let startT = new Date().getTime();

// promise chaining
// 모든 작업이 끝나면 끝 
// 순차 진행이 아님.
Promise.all([p1, p2]).then((result)=>{
    console.log("p1 = " + result[0].p1_text);
    console.log("p2 = " + result[1].p2_text);
    
    // let endT = new Date().getTime() - startT;
    // console.log(endT);
}).catch(err => {
    console.log(err);
});

