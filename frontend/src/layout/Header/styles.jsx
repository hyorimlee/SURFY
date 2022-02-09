import styled from 'styled-components';

import { Grid } from '@material-ui/core';

const OuterGrid = styled(Grid)`
  width: 390px;
  height: 50px;
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