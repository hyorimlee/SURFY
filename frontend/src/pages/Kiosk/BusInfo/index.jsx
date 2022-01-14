import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import InfoList from '../../../components/Bus/InfoList/index';

import 'swiper/css';
import Wrapper from './styles';


SwiperCore.use([Autoplay]);


const BusInfo = (props) => {
  const [showNumber, setShowNumber] = useState(6);
  const { busInfo } = props;


  let items = [];
  let idx = 0;

  do {
    items.push(
      <SwiperSlide key={idx}>
        <InfoList
          items={[].concat(busInfo.slice(showNumber * idx, showNumber * (idx+1)))}
        >
        </InfoList>
      </SwiperSlide>
    )
    idx += 1;
  } while (idx * showNumber < busInfo.length);

  return (
    <Wrapper>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        도착 예정
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Swiper
            cssMode={true}
            autoplay={{
              "delay": 7000,
              "disableOnInteraction": false
            }}
            loop={true}
            className="mySwiper"
          >
            {items}
          </Swiper>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default BusInfo;