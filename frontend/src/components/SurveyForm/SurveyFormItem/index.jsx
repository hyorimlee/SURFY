import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import { CustomGrid } from './styles';

const SurveyFormItem = ({ question, changed }) => {
  // const [answer, setAnswer] = useState('');
  
  const valueChage = (event) => {
    // setAnswer(event.target.value);
    changed(event.target.value, question.id);
  }

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
        // value={answer}
        onChange={valueChage}
      />
    </CustomGrid>
  );
}

export default SurveyFormItem;