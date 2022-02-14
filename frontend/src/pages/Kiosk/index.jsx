import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../../layout/layout';
import BusInfo from './BusInfo/index';
import BusSoon from './BusSoon/index';
import GoogleMap from './GoogleMap/index';
import StationNameWeather from './StaionNameWeather/index';
import Survey from './Survey/index';

import Wrapper from './styles';


const Kiosk = () => {
  const [busStationId, setBusStationId] = useState('19005');
  const [busStationInfo, setBusStationInfo] = useState([{stNm: ''}]);           // 버스 정류장 정보 (초기값: stNm - 정류장 이름, getX - 정류장 경도, getY - 정류장 위도)
  const [busSoon, setBusSoon] = useState([]);
  console.log(busStationInfo);

  // 서버로부터 버스 정보 수신 / 최초 1회 실행, 일정 시간마다 반복
  useEffect(() => {
    const getBusStationInfo = setInterval(() => {
      axios({
        method: 'GET',
        url: `http://i6a204.p.ssafy.io:8000/api/businfo/${busStationId}`,
      })
      .then((response) => {
        console.log('good');
        setBusStationInfo(response.data);
        setBusSoon(() => {
          return response.data.filter((bus) => {
            return bus.arrmsg1 === '곧 도착';
          })
        })
      })
      .catch(() => {
        console.error('버스 정보 수신 에러');
      })
    }, 10000);

    return () => {
      clearInterval(getBusStationInfo);
    }
  }, [busStationId]);

  return (
    <Layout>
      <Wrapper>
        {busStationInfo[0].stNm === ''
          ? null
          : (
            <>
              <StationNameWeather stationName={busStationInfo[0].stNm}></StationNameWeather>
              <BusSoon busSoon={busSoon}></BusSoon>
              <BusInfo busInfo={busStationInfo}></BusInfo>
            </>
          )
        }
        <GoogleMap></GoogleMap>
        <Survey></Survey>
      </Wrapper>
    </Layout>
  )
}

export default Kiosk;