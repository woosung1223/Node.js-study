const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public'))); // static 경로 지정
// 해당되는 경로에 파일이 존재하지 않는다면 바로 next 호출

// app.use('/', (req, res, next) => { // 미들웨어 확장
//     if (req.session.id) { // 만약 로그인을 했다면
//         express.static(path.join(__dirname, 'public'))(req, res, next)
//     } else { // 아니라면 next 로 다음 미들웨어로 넘어감. 
//         next();
//     }
// });


app.get('/', (req, res) => {
    res.send('this is test');
});


app.listen(app.get('port'), () => {
    console.log(`listening ${app.get('port')}`);
});