import React from 'react';
import { Grid } from '@material-ui/core';

import NowSurvey from './NowSurvey/index';
import OtherSurvey from './OtherSurvey/index';

import Layout from '../../layout/layout';
import Wrapper from './styles';

const Web = (props) => {
  return (
    <Layout>
      <Wrapper>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* 현재 진행중 설문조사 */}
          <NowSurvey>
          </NowSurvey>
          {/* 다른 진행 설문조사 */}
          <OtherSurvey>
          </OtherSurvey>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default Web;