import React from 'react';
import { Card, CardHeader, CardContent, Grid, Typography } from '@material-ui/core';

import Wrapper from './styles';

const InfoItem = (props) => {
  const { info } = props;

  // isFullFlag1 - 0: 만차 아님, 1: 만차
  return (
    <Wrapper>
      <Card>
        <Grid
          container
          direction="row"
        >
          <CardHeader title={info.rtNm}>
          </CardHeader>
          <CardContent>
            <Typography >{info.arrmsg1}</Typography>
            <Typography >{info.isFullFlag1}</Typography>
          </CardContent>
        </Grid>
      </Card>
    </Wrapper>
  )
}

export default InfoItem;