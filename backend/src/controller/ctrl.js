"use strict";
const axios = require('axios');
async function getCurrentWeather(lat, lon) {
    // 0200 0500 0800 1100 1400 1700 2000 2300 에 기상정보 초기화
    const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'
    // 인코딩 인증키
    const Key = "eGOWobdvhiVbILb3e0GemxAvUi5XzyZE71h6PpAppFBb8hoZGxne6NW7vtUMMSAvwXx1Aib28LVoF6PdEHTgyQ%3D%3D";
    // 디코딩 인증키
    const serviceKey = 'eGOWobdvhiVbILb3e0GemxAvUi5XzyZE71h6PpAppFBb8hoZGxne6NW7vtUMMSAvwXx1Aib28LVoF6PdEHTgyQ=='
    var now = new Date();

    // 현재 날짜 가져오기
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate();

    if (month < 10){
        month = '0' + month
    }
    const baseDate = String(year) + String(month) + String(date);
    var hours = now.getHours();
    // 3시간 단위로 갱신이 되기때문에 그에 맞춰서 데이터를 설정
    if (hours < 2){
        hours = '23'
    } else if (hours < 5){
        hours = '02'
    } else if (hours < 8){
        hours = '05'
    } else if (hours < 11){
        hours = '08'
    } else if (hours < 14){
        hours = '11'
    } else if (hours < 17){
        hours = '14'
    } else if (hours < 20){
        hours = '17'
    } else if (hours < 23){
        hours = '20'
    }
    const baseTime = hours + '00'
    let result
    result = await axios.get(url,{
        params:{
            serviceKey : serviceKey,
            numOfRows : 12,
            pageNo : 1,
            dataType : 'JSON',
            base_date : baseDate,
            base_time : baseTime,
            nx : Number(lat),
            ny : Number(lon)
        }
    })

    const apidata = result.data.response.body.items
    return apidata;
}

async function getStationByUid(arsId){
    const url = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid'
    const serviceKey = 'Agmjdb9CJQ53dFTE4ZgjsZx8zErTIab4IngbZMso8ZNGPZxt5cx0qPWuxgdrTP/rH0kP9Ro0fw03/Yqny+p2Sg=='
    const resultType = 'json'
    const data = axios.get(url,{
        params:{
            ServiceKey : serviceKey,
            arsId : arsId,
            resultType : resultType
        }
    })
    return data
}

const output = {
    home : (req, res) => {
        res.render("index");
    },
    login : (req, res) => {
        res.render("login")
    },
    weather : async(req,res)=>{
        try{ 
            const {latitude,longitude} = req.params
            const data = await getCurrentWeather(latitude,longitude)
            return res.json(data)
        }
        catch(error){
            return res.status(400).json({msg:"error"})
        }
    },
    businfo : async(req,res)=>{
        try{
            const {stationId} = req.params
            const data = await getStationByUid(stationId)
            const item = data['data']['msgBody']['itemList']
            return res.json(item)
        }
        catch(error){
            return res.json({error:error})
        }
    },
}


module.exports = {
    output : output,
};
