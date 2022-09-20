// os
const os = require('os');

console.log(os.arch());
console.log(os.homedir());
console.log(os.cpus()); // 코어 개수 확인 가능
console.log(os.freemem()); // 여유 메모리
console.log(os.totalmem()); // 전체 메모리
console.log(os.totalmem() - os.freemem()); // 사용중인 메모리

const path = require('path');
const string = __filename;
console.log(path.join('/a/', '/b/c/'));
console.log(path.resolve('/a/', '/b/c/'));