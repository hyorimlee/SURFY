import React from 'react';
import { Chip } from '@material-ui/core';

import Wrapper from './styles'

const TextBoxItem = (props) => {
  const { text } = props;

  return (
    <Wrapper>
      <Chip label={text} />
    </Wrapper>
  );
}

export default TextBoxItem;