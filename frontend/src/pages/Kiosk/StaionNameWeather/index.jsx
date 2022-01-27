import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';

import TextBoxItem from '../../../components/Bus/TextBoxItem/index';
import Weather from '../../../components/Weather';
import TimeInfo from '../../../components/Time/index';
import Wrapper from './styles';

const StationNameWeather = (props) => {
  const { stationName } = props;

  return (
    <Wrapper
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
    >
      <TimeInfo></TimeInfo>
      <TextBoxItem text={stationName} />
      <Weather/>
    </Wrapper>
  );
}

export default StationNameWeather;