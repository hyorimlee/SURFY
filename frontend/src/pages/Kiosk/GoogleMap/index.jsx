import React from 'react';
import { Grid } from '@material-ui/core';

import Map from '../../../components/Map/index';
import Wrapper from './styles';

const GoogleMap = () => {
  return (
    <Wrapper>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default GoogleMap;