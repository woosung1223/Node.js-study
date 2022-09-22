const fs = require('fs')

const readStream = fs.createReadStream('./filetest1.txt', {highWaterMark: 5});
// highWaterMark -> 스트림 단위. 5바이트씩 가져온다
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
}); // 데이터가 chunk로 오면 data 리스트에 하나씩 집어넣음. 데이터는 순차적으로 온다

readStream.on('end', () => {
    console.log('end : ', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error : ', err);
})