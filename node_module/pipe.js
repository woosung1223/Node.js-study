const fs = require('fs');

const readFile = fs.createReadStream('filetest1.txt');
const writeFile = fs.createWriteStream('filetest1_stream.txt');
readFile.pipe(writeFile);

// readFile의 stream이 writeFile의 스트림과 연결