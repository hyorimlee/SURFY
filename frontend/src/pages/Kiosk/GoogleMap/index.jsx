import React from 'react';
import { Grid } from '@material-ui/core';

import Map from '../../../components/Map/index';
import Wrapper from './styles';

const GoogleMap = () => {
  return (
    <Wrapper>
      <Grid>
        <Grid>
          <Map />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default GoogleMap;