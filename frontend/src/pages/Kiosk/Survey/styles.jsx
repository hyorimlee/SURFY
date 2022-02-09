import styled from 'styled-components';
import { Grid, CircularProgress } from '@material-ui/core';

const CustomGrid = styled(Grid)`
  height: 400px;

  .qstn {
    color: white;
    font-size: 50px;
<<<<<<< HEAD
    margin: 30px 0;
=======
    margin: 10px 0;
    text-align: center;
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
  }
`;

const CustomCircularProgress = styled(CircularProgress)`
  color: white !important;
`;

export { CustomGrid, CustomCircularProgress };