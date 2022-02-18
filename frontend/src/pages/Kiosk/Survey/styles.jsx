import styled from 'styled-components';
import { Grid, CircularProgress } from '@material-ui/core';

const CustomGrid = styled(Grid)`
  height: 130px;

  .qstn {
    color: white;
    font-size: 1.5rem;
    margin: 10px 0;
    text-align: center;
  }
`;

const CustomCircularProgress = styled(CircularProgress)`
  color: white !important;
`;

export { CustomGrid, CustomCircularProgress };