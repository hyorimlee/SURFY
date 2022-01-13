import React from 'react';
import Weather from '../../components/Weather/';
import BusStationName from '../../components/Bus/BusStationName';
import CardComponent from '../../components/Box';
import Wrapper from './styles';

const Header = (props) => {
  return (
    <Wrapper>
      <Weather />
      <BusStationName />
      <CardComponent />
    </Wrapper>
  )
}

export default Header;