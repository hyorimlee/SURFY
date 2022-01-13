import React from 'react';
import { Grid } from '@material-ui/core';

import Wrapper from './styles';

const BusInfo = (props) => {
  const { busInfo } = props;

  return (
    <Wrapper>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        
      </Grid>
    </Wrapper>
  );
}

export default BusInfo;