import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Wrapper, { CustomGrid } from './styles';

const InfoItem = (props) => {
  const { info } = props;

  // isFullFlag1 - 0: 만차 아님, 1: 만차
  return (
    <Wrapper>
      <CustomGrid
        container
        direction="row"
        alignItems="center"
      >
        <div className="header">
          {info.rtNm}
        </div>
        <div className="remain">
          <p>{info.arrmsg1.replace()}</p>
        </div>
        <div className="locate">
          <p>{info.arrmsg1}</p>
        </div>
        <div className="full">
          <p>{info.isFullFlag1 ? "여유" : "혼잡"}</p>
        </div>
      </CustomGrid>
    </Wrapper>
  )
}

export default InfoItem;