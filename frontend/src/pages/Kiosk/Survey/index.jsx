import React from 'react';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';
import CardComponent from '../../../components/Card';

const Survey = () => {
  return (
    <Wrapper>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
          <CardComponent />
      </Grid>
    </Wrapper>
  );
}

export default Survey;