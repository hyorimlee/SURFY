import React from 'react';
import { Grid } from '@material-ui/core';

import Time from '../../../components/Time/index';
import Wrapper from './styles';

const TimeInfo = () => {
  return (
    <Wrapper>
      <Grid>
        <Time />
      </Grid>
    </Wrapper>
  )
}

export default TimeInfo;
