import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';

import Layout from '../../layout/layout';
import BusInfo from '../../components/Kiosk/BusInfo/index';
import BusSoon from '../../components/Kiosk/BusSoon/index';
import GoogleMap from '../../components/Kiosk/GoogleMap/index';
import StationNameWeather from '../../components/Kiosk/StaionNameWeather/index';
import Survey from '../../components/Kiosk/Survey/index';

import Wrapper from './styles';


const Kiosk = () => {
  const [busStationInfo, setBusStationInfo] = useState([{stNm: '', getX: '' ,getY: ''}]);           // 버스 정류장 정보

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
    <Layout>
      <Wrapper>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <StationNameWeather></StationNameWeather>
          <BusSoon></BusSoon>
          <BusInfo></BusInfo>
          <GoogleMap></GoogleMap>
          <Survey></Survey>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default Kiosk;