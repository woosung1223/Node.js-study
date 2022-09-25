const http = require('http');
const fs = require('fs').promises


http.createServer(async (req, res) => {
    try {
        if (req.method === 'GET') {

            if (req.url === '/') {
                res.writeHead(200, {'Set-Cookie' : 'mycookie=test'});
                // 쿠키 값 전달
                return res.end('/ GET');
            }
            else if (req.url === '/users') {
                return res.end('/users GET');
            }

            try {
                // /도 아니고 /users도 아니라면
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
                // 프론트엔드에서의 js 파일이나 css 파일에 대한 요청일 수도 있음
                // 그게 아니라면 404 not found
            } catch (err) {
                return res.end('404 NOT FOUND');
            }
        }
        else if (req.method === 'POST') {
            return res.end('POST');
        }

        else if (req.method === 'PUT') {
            return res.end('PUT');
        }

        else if (req.method === 'DELETE') {
            return res.end('DELETE');
        }
        // 아무 요청에도 해당하지 않는다면
        return res.end('NOT FOUND');
    } catch (err) {
        console.log(err);
        res.end(err.message);
    }
    
})






.listen(8080, () => {
    console.log('listening 8080');
});
