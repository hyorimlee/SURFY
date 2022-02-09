import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

<<<<<<< HEAD
import NowSurvey from './NowSurvey/index';
import OtherSurvey from './OtherSurvey/index';
=======
// import NowSurvey from './NowSurvey/index';
import OtherSurvey from './OtherSurvey/index';
import MileageSave from './MileageSave/index';
import Login from '../../components/Auth/Login/index';
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562

import Layout from '../../layout/layout';
import Wrapper from './styles';

const Web = (props) => {
<<<<<<< HEAD
  const [isLogin, setIsLogin] = useState(localStorage.getItem('login') ? true : false);
=======
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') ? true : false);
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562

  return (
    <Layout isLogin={isLogin}>
      <Wrapper>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
<<<<<<< HEAD
          {/* 현재 진행중 설문조사 */}
          <NowSurvey>
          </NowSurvey>
          {/* 다른 진행 설문조사 */}
          <OtherSurvey>
          </OtherSurvey>
=======
          <OtherSurvey>
          </OtherSurvey>
          <Login></Login>
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default Web;