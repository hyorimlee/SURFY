import React, { useState, useEffect } from 'react';

import InfoList from '../../../components/Bus/InfoList/index';

import 'swiper/css';
import Wrapper, { InfoHeader, InfoContent } from './styles';



const BusInfo = (props) => {
  const [showNumber, setShowNumber] = useState(6);
  const [showIdx, setShowIdx] = useState(0);
  const { busInfo } = props;


  let items = [];
  let idx = 0;

  do {
    items.push(
      <InfoList
        key={idx}
        items={[].concat(busInfo.slice(showNumber * idx, showNumber * (idx+1)))}
      >
      </InfoList>
    )
    idx += 1;
  } while (idx * showNumber < busInfo.length);

  useEffect(() => {
    const nextIdx = setInterval(() => {
      setShowIdx((showIdx+1) % items.length)
    }, 5000);

    return () => {
      clearInterval(nextIdx);
    }
  })

  return (
    <Wrapper>
      <InfoHeader>
        <p>노선 번호</p>
        <p>대기 시간</p>
        <p>현재 버스 위치</p>
        <p>혼잡 여부</p>
      </InfoHeader>
      <InfoContent>
        {items[showIdx]}
      </InfoContent>
    </Wrapper>
  );
}

export default BusInfo;