import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const CustomGrid = styled(Grid)`
  & p {
    margin: 10px;
  }
`;

export { CustomGrid };