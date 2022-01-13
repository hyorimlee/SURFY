import React from 'react';
import { Grid } from '@material-ui/core';

import Wrapper from './styles';

const BusInfo = () => {
  return (
    <Wrapper>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        버스들 리스트 나오는 영역, 여기에 컴포넌트 삽입
      </Grid>
    </Wrapper>
  );
}

export default BusInfo;