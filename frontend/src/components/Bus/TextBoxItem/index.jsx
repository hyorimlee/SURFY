import React from 'react';
import { Chip } from '@material-ui/core';

import Wrapper from './styles'

const TextBoxItem = (props) => {
  return (
    <Wrapper>
      <Chip label="영등포역" />
    </Wrapper>
  );
}

export default TextBoxItem;