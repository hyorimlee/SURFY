import React from 'react';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';
import CardComponent from '../../../components/Card';

const Survey = () => {
  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <div className="qstn">
          당신은 민초파? 반민초파?         
        </div>
        <CardComponent />
      </Grid>
    </Wrapper>
  );
}

export default Survey;