import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Wrapper from './styles';

const NowSurvey = () => {
  return (
    <Wrapper>
      <Box 
        component="span" 
        className="nSvy" 
        sx={{ p: 2, borderRadius: 16 }}>
        현재 진행중인 설문
        <Button
          className="nSvyBtn"
          variant="contained"
          color="secondary"
          style={{ height: 100, borderRadius: 16 }}
        >
          설문 시작
        </Button>
      </Box>
    </Wrapper>
  )
}

export default NowSurvey;



