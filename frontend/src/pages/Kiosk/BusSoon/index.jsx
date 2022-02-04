import React, { useState, useEffect } from 'react';

import TextBoxList from '../../../components/Bus/TextBoxList/index';

import 'swiper/css';
import Wrapper from './styles';


const BusSoon = (props) => {
  const [showNumber, setShowNumber] = useState(6);
  const [showIdx, setShowIdx] = useState(0);
  // const [busSoon] = useState([{rtNm: '25안산'}, {rtNm: '20안산'}, {rtNm: '250안산'}, {rtNm: '2500안산'}, {rtNm: '2500안산'}, {rtNm: '2500안산'}, {rtNm: '25안산'}, {rtNm: '250안산'}, {rtNm: '2500안산'}])
  const { busSoon } = props;

  let items = [];
  let idx = 0;

  do {
    items.push(
      <TextBoxList
        items={[].concat(busSoon.slice(showNumber * idx, showNumber * (idx+1)))}
        key={idx}
      >
      </TextBoxList>
    )
    idx += 1;
  } while (idx * showNumber < busSoon.length);

  useEffect(() => {
    const nextIdx = setInterval(() => {
      setShowIdx((showIdx+1) % items.length);
    }, 5000);
    
    return () => {
      clearInterval(nextIdx);
    }
  })

  return (
    <Wrapper>
      <p>잠시 후 도착</p>
      <div className="bus-soon--list">
        {items[showIdx]}
      </div>
    </Wrapper>
  );
}

export default BusSoon;