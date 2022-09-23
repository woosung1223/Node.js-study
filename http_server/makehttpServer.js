const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>hello Node!</h1>');
    res.end('<p>hello server!</p>');
})
.listen(8080, () => {
    console.log('8080포트에서 서버 대기중입니다');
})

server.on('error', (error) => {
    console.log(error);
});

