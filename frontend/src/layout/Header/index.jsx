import Wrapper from './styles';
import styled from 'styled-components';
import Weather from '../../components/Weather/';
import BusStationName from '../../components/Bus/BusStationName';

const Header = (props) => {
  return (
    <header>
      <Weather />
      <BusStationName />
      <h2>시간</h2>
    </header>
  )
}


export default Header