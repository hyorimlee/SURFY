import React from 'react';
import { Grid } from '@material-ui/core';

import Wrapper from './styles';


const Header = (props) => {
  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <p>Logo</p>
        <p>Account</p>
      </Grid>
    </Wrapper>
  );
}

export default Header;
