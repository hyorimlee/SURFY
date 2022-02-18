import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import OtherSurvey from './OtherSurvey/index';
import Auth from '../../components/Auth/index';

import Layout from '../../layout/layout';
import Wrapper from './styles';

const Web = (props) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') ? true : false);

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
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default Web;