const wait1second = new Promise((resolve, reject)=>{
    reject("error");
});

wait1second.then((result)=>{
    console.log("프로미스 이행완료");
}).catch((err)=>{
    console.log("에러")
})