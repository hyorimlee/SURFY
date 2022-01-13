import React from 'react';
import { Grid } from '@material-ui/core';

import TextBoxItem from '../../../components/Bus/TextBoxItem/index';
import Weather from '../../../components/Weather';
import Wrapper from './styles';


const StationNameWeather = () => {
  return (
    <Wrapper>
      <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
      >
        <TextBoxItem stationName="영등포역" />
        <Weather />
      </Grid>
    </Wrapper>
  );
}

export default StationNameWeather;