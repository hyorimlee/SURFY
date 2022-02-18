import React from 'react';
import { Grid } from '@material-ui/core';

import TextBoxItem from '../TextBoxItem/index';

import Wrapper, { CustomGrid } from './styles';
import { ClassNames } from '@emotion/react';


const TextBoxList = (props) => {
  const { items } = props;

  let item = [];

  item.push(
    items.map((e, idx) => {
      return (
        <CustomGrid
          item
          xs={3}
          key={e.rtNm}
        >
          {e.rtNm}
        </CustomGrid>
      )
    })
  )

  return (
    <Wrapper>
      <Grid
        container
        spacing={2}
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