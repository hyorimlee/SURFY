import styled from 'styled-components';
import { Grid, CircularProgress } from '@material-ui/core';

const CustomGrid = styled(Grid)`
  height: 400px;

  .qstn {
    color: white;
    font-size: 50px;
    margin: 30px 0;
  }
`;

const CustomCircularProgress = styled(CircularProgress)`
  color: white !important;
`;

export { CustomGrid, CustomCircularProgress };