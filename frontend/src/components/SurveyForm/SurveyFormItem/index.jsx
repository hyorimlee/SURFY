import React from 'react';
import { TextField } from '@material-ui/core';

import { CustomGrid } from './styles';

const SurveyFormItem = ({ question, answer }) => {
  console.log(question);
  
  return (
    <CustomGrid
      container      
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={10}
    >
      <p>{question.content}</p>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={8}
        placeholder="답변을 입력해주세요."
        variant="outlined"
        onChange={answer}
      />
    </CustomGrid>
  );
}

export default SurveyFormItem;