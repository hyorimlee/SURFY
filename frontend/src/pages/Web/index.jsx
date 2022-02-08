import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

// import NowSurvey from './NowSurvey/index';
import OtherSurvey from './OtherSurvey/index';
import MileageSave from './MileageSave/index';
import Login from '../../components/Auth/Login/index';

import Layout from '../../layout/layout';
import Wrapper from './styles';

const Web = (props) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('login') ? true : false);

  return (
    <Layout isLogin={isLogin}>
      <Wrapper>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <OtherSurvey>
          </OtherSurvey>
          <Login></Login>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default Web;