import styled from 'styled-components';

const Wrapper = styled.div`
  width: 35px;
  height: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const WeatherIcon = styled.div`
  font-size: 1.5rem;
`;

const WeatherTemperature = styled.div`
  font-size: 0.8rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export { Wrapper, WeatherIcon, WeatherTemperature };