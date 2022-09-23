const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
try {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    const data = await fs.readFile('./server.html');
		res.end(data);
} catch(err) {
	console.log(err);
	res.writeHead(500, { 'Content-Type' : 'text/plain; charset=utf-8' });
	res.end(err.message); 
}
})
.listen(8080, () => {
    console.log('8080포트에서 서버 대기중입니다');
})