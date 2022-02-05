/* 
    사용방법

    1. 해당 파일이 위치하는 디렉토리에서 터미널 켜기
    2. npm i 이용하여 필요한 모듈 설치
    3. node app.js 사용하여 서버 실행
    4. 클라이언트에서 http://localhost:포트번호/주소 로 요청을 보내서 데이터 받아오기
*/


const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 8000;        // 포트 번호
const morgan = require('morgan');//for log
const {stream} = require("./src/config/winston.config")
const routes = require('./src/routes');

// 디비 연결부분
// const maria = require('./src/database/index')
// const bodyParser = require('body-parser');
const fs = require('fs');
const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data)
const mysql = require('mysql')
// require('dotenv').config();
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password : conf.password,
    port : conf.port,
    database: conf.database
})
connection.connect();

app.use(
    cors({
        origin: "*",
        optionsSuccessStatus: 200,
    })
);

app.get('/data',(req,res) =>{
    connection.query(
        "SELECT * FROM maptest", (err, data) =>{
            if(!err){
                res.send(data);
            } else {
                console.log(err);
                res.send(err);
            }
        });
});
// app.use(morgan("conbined",{stream}));
// cors 오류 방지

app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.use('/', routes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})