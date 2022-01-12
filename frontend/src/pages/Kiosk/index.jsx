import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BusStationName from '../../components/Bus/BusStationName/index';


const Kiosk = () => {
  const [busStationInfo, setBusStationInfo] = useState([{stNm: ''}]);           // 버스 정류장 정보

  // 서버로부터 버스 정보 수신 / 최초 1회 실행, 일정 시간마다 반복
  useEffect(() => {
    const getBusStationInfo = setInterval(() => {
      axios({
        method: 'GET',
        url: 'http://localhost:8000/api',
      })
      .then((response) => {
        setBusStationInfo(response.data);
      })
      .catch(() => {
        console.error('버스 정보 수신 에러');
      })
    }, 10000);

    return () => {
      clearInterval(getBusStationInfo);
    }

  }, []);

  return (
    <>
      <BusStationName stationName={busStationInfo[0].stNm} />
    </>
  );
}

export default Kiosk;