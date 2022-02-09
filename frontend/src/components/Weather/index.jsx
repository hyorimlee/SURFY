import axios from 'axios';
import React, {useState, useEffect} from 'react';


import WbSunnyIcon from '@material-ui/icons/WbSunny'; // 맑음
import WbCloudyIcon from '@material-ui/icons/WbCloudy'; // 흐림
import AcUnitIcon from '@material-ui/icons/AcUnit'; // 눈
import NightsStayIcon from '@material-ui/icons/NightsStay'; // 밤
import BeachAccessIcon from '@material-ui/icons/BeachAccess'; // 비

import { Wrapper, WeatherIcon, WeatherTemperature } from './styles';

const Weather = (props) =>{
  // 0200 0500 0800 1100 1400 1700 2000 2300 에 기상정보 초기화

  // api 정보를 담아두는 State
  const [api, setApi] = useState(null);

  // error 담아둠
  const [error, setError] = useState(null);

  // 실험용 local url
<<<<<<< HEAD
  const url = `http://localhost:8000/api/weather/59/126`
=======
  const url = `http://i6a204.p.ssafy.io:8000/api/weather/59/126`
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
  
  
  useEffect(() => {
    // 임시로 이름 go설정
    const go = async() =>{
      try{
        setError(null);
        setApi(null);
        // setInterval(() => {
        // }, )
        const response = await axios.get(url);
        setApi(response.data);
      } catch(e){
        setError(e);
      }
    };
    go();
  }, []);
  if (error) return <div>에러 발생</div>
  if (!api) return null;
  var icon = ''
  var temperature = ''
  var humidity = '' 
  for (const a of api['item']){
    if (a.category === 'TMP'){
      temperature = a.fcstValue + "℃"
    } else if (a.category === 'SKY'){
      if (5 < a.baseTime.slice(0,2) < 18){
        if (a.fcstValue < 6){
          icon = '1'
        } else if (a.fcstValue < 9){
          icon = '2'
        } else {
          icon = '3'
        }
      } else {
        if (a.fcstValue < 6){
          icon = '4'
        } else if (a.fcstValue < 9){
          icon = '5'
        } else {
          icon = '3'
        }
      }
    } else if (a.category === 'PCP'){
      if (a.fcstValue !== '강수없음'){
        icon = '6'
      }
    } else if (a.category === 'SNO'){
      if (a.fcstValue !== '적설없음'){
        icon = '7'
      }
    } else if (a.category === 'REH'){
      humidity = a.fcstValue + "%"
    }
  }
  // const imgurl = "/images/" + icon + ".JPG"
  // <img src={imgurl}/>
  return (
    <Wrapper>
      <WeatherIcon>
        {
          icon === '1' && <WbSunnyIcon fontSize="inherit"/>
        }
        {
          icon === '2' && <WbCloudyIcon fontSize="inherit"/>
        }
        {
          icon === '3' && <WbCloudyIcon fontSize="inherit"/>
        }
        {
          icon === '4' && <NightsStayIcon fontSize="inherit"/>
        }
        {
          icon === '5' && <WbCloudyIcon fontSize="inherit"/>
        }
        {
          icon === '6' && <BeachAccessIcon fontSize="inherit"/>
        }
        {
          icon === '7' && <AcUnitIcon fontSize="inherit"/>
        }
      </WeatherIcon>
      <WeatherTemperature>
        {temperature}
        <br />
        {humidity}
      </WeatherTemperature>
    </Wrapper>
  );
};

export default Weather;
