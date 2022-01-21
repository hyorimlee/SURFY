import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import Wrapper from './styles';

function Time() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });

  return (
    <Wrapper>
      <h1>{dateString}</h1>
      <div>
        <Clock format={'h시 mm분 ss초 A'} ticking={true} timezone={'Asia/Seoul'}/>
      </div>
    </Wrapper>
  )
}


export default Time;
