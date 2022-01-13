import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import TextBoxList from '../../../components/Bus/TextBoxList/index';

import 'swiper/css';
import "swiper/css/effect-fade"
import Wrapper from './styles';


SwiperCore.use([Autoplay]);


const BusSoon = (props) => {
  const [showNumber, setShowNumber] = useState(4);
  const { busSoon } = props;

  let items = [];
  let idx = 0;

  do {
    items.push(
      <SwiperSlide key={idx}>
        <TextBoxList
          items={[].concat(busSoon.slice(showNumber * idx, showNumber * (idx+1)))}
        >
        </TextBoxList>
      </SwiperSlide>
    )
    idx += 1;
  } while (idx * showNumber < busSoon.length);

  return (
    <Wrapper>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        곧 도착하는 버스 목록
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Swiper
            cssMode={true}
            autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }}
            loop={true}
          >
            {items}
          </Swiper>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default BusSoon;