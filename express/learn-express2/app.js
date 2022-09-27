const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
    console.log('출발!');
    next();
});

app.use(morgan('dev')); // morgan 미들웨어 추가
app.use(cookieParser()); // cookie-parser 미들웨어 추가 
app.use(express.json());
app.use(express.urlencoded({extended : true })); // 이 두줄은 bodyparser 미들웨어 추가 


app.use((req, res, next) => {
    console.log('거쳐가요 1');
    next();
},(req, res, next) => {
    console.log('거쳐가요 2');
    next();
});

app.get('/', (req, res) => {
    console.log(req.cookies); // cookie-parser 이용 cookie 값 열어보기
    console.log('도착!');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/cookieget', (req, res) => {
    res.cookie('name', 'test', { // 해당 URL GET 요청시 쿠키 값 넣어주기!
        httpOnly: true,
        path: '/',
    });
    res.send('hello express');
});
app.post('/', (req, res) => {
    console.log(req.body.name); // bodyparser 이용
    res.send("hello express");
});
app.put('/', (req, res) => {
    res.send('hello express');
});
// 라우팅 여기까지 종료

app.get('/:any', (req, res) => {
    console.log('아무거나 여기에');
    console.log(sdfsdf);
    res.sendFile(path.join(__dirname, 'index.html'));
}); // 와일드카드

app.get('*', (req, res) => {
    console.log('진짜 뭐든지 여기에');
    res.sendFile(path.join(__dirname, 'index.html'));
}) // 와일드카드, 슬래시 두 개 이상부터 들어감 (ex. localhost:3000/test/123 은 가능)


app.use((req, res, next) => {
    console.log('404 NOT FOUND!');
    res.status(404).send('404 NOT FOUND에요');
}) // 404 에러처리 미들웨어, 라우터에서 맞는게 없을 때. (와일드카드는 없어야 가능)
// 정확히 에러는 아님.

app.use((err, req, res, next) => {
    console.error('에러 발생!');
    res.send('에러 발생했어요.');
}) // 에러처리 미들웨어

app.listen(app.get('port'), () => {
    console.log(`express listening ${app.get('port')}`);
});