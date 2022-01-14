import React from 'react';
import { Grid } from '@material-ui/core';

import InfoItem from '../InfoItem/index';

import Wrapper from './styles';

const InfoList = (props) => {
  const { items } = props;

  let item1 = [], item2 = [];

  item1.push(
    items.slice(0, 3).map((e) => {
      return <InfoItem key={e.rtNm} info={e}></InfoItem>
    })
  )

  item2.push(
    items.slice(3, 6).map((e) => {
      return <InfoItem key={e.rtNm} info={e}></InfoItem>
    })
  )


  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent='flex-start'
        alignItems="center"
      >
        {item1}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent='flex-start'
        alignItems="center"
      >
        {item2}
      </Grid>
    </Wrapper>
  )
}

export default InfoList;

