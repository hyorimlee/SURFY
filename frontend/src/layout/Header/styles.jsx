import styled from 'styled-components';

import { Grid } from '@material-ui/core';

const OuterGrid = styled(Grid)`
  height: 40px;
  background-color: #64AAFF;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  & p {
    margin: 5px;
  }
`;

export { OuterGrid };