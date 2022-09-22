const fs = require('fs');

fs.readFile('./filetest1.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());

    fs.readFile('./filetest2.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
        console.log(data.toString());
    })
});

// callback hell 생성 주의! 
// promise, async-await 주로 사용하기

// promise-then 형식
const fs_promise = require('fs').promises;
fs_promise.readFile('./filetest1.txt').then((data) => {
    console.log(data);
    console.log(data.toString());
}).catch((err) => {
    console.log(err);
});
// 실행 결과는 promise 먼저! 콜백보다 우선순위를 가지기 때문에