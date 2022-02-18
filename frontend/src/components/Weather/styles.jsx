import styled from 'styled-components';

const Wrapper = styled.div`
  width: 220px;
  height: 130px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherIcon = styled.div`
  font-size: 5rem;
`;

const WeatherTemperature = styled.div`
  font-size: 2.5rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export { Wrapper, WeatherIcon, WeatherTemperature };