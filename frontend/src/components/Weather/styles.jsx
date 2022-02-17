import styled from 'styled-components';

const Wrapper = styled.div`
  width: 22vw;
  height: 6vh;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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