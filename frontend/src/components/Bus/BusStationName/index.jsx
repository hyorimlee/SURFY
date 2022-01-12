import React from 'react';
import { Chip } from '@material-ui/core';

import Wrapper from './styles'

const BusStationName = (props) => {
  return (
    <Wrapper>
      <Chip label={props.stationName} />
    </Wrapper>
  );
}

export default BusStationName;