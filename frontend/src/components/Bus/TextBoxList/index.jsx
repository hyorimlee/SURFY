import React from 'react';
import { Grid } from '@material-ui/core';

import TextBoxItem from '../TextBoxItem/index';

import Wrapper from './styles';


const TextBoxList = (props) => {
  const { items } = props;

  let item = [];

  item.push(
    items.map((e) => {
      return <TextBoxItem key={e.rtNm} text={e.rtNm}></TextBoxItem>
    })
  )

  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {item}
      </Grid>
    </Wrapper>
  )
}

export default TextBoxList;