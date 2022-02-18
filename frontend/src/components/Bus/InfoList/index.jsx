import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import InfoItem from '../InfoItem/index';

import Wrapper from './styles';

const InfoList = (props) => {
  const { items } = props;

  let item = [];

  item.push(
    items.map((e) => {
      return <InfoItem key={e.rtNm} info={e}></InfoItem>
    })
  )


  return (
    <Wrapper>
      <Grid
        container
        direction="column"
        justifyContent='flex-start'
        alignItems="stretch"
      >
        {item}
      </Grid>
    </Wrapper>
  )
}

export default InfoList;

