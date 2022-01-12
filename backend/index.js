/* 
    사용방법

    1. 해당 파일이 위치하는 디렉토리에서 터미널 켜기
    2. npm i 이용하여 필요한 모듈 설치
    3. node app.js 사용하여 서버 실행
    4. 클라이언트에서 http://localhost:포트번호/주소 로 요청을 보내서 데이터 받아오기
*/


const express = require('express');
const axios = require('axios');

const app = express();
const port = 8000;        // 포트 번호



async function getCurrentWeather(lat, lon) {
    const key = "8d6f5317402e93f5dbe48bd4bf02ad37";
    const city = "Seoul";
    let result;
    if (lat && lon) {
        result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)

    } else {
        result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    }
    return result;
}


app.get('/weather/:latitude/:longitude',async(req,res)=>{
    try{
        const {latitude,longitude} = req.params
        const {data} = await getCurrentWeather(latitude,longitude)
        return res.json({data})
    }
    catch(error){
        console.log('error')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})