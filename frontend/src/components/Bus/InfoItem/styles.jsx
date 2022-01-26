import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Wrapper = styled.div`
  height: 128px;
  margin: 0 0 10px 0;
  background-color: #ffffff;
  border-radius: 15px;

  & .header, .remain, .locate, .full {
    width: 260px;
    height: 128px;
    font-size: 3rem;
    text-align: center;
    line-height: 128px;
    background-color: #ffffff;
    border-radius: 15px;
  }

  & .remain {
    width: 330px;
    margin-left: 47px;
  }

  & .locate {
    width: 380px;
    margin-left: 42px;
  }

  & .full {
    width: 260px;
    margin-left: 70px;
  }
`;

export const CustomGrid = styled(Grid)`
  height: 100%;
`;

export default Wrapper;