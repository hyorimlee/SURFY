import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';

import TextBoxItem from '../../../components/Bus/TextBoxItem/index';
import Weather from '../../../components/Weather/index';
import Wrapper from './styles';

const StationNameWeather = (props) => {
  const { stationName, latitude, logitude } = props;

  return (
    <Wrapper>
      <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
      >
        <TextBoxItem text={stationName} />
        <Weather />
      </Grid>
    </Wrapper>
  );
}

export default StationNameWeather;