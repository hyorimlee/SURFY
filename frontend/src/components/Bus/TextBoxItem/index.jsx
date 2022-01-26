import React from 'react';

import { CustomChip } from './styles'

const TextBoxItem = (props) => {
  const { text } = props;

  return (
    <CustomChip label={text} />
  );
}

export default TextBoxItem;