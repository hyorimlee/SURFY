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

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const CustomGrid = styled(Grid)`
  height: 100%;
`;

const IsFullImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 1.5px 1.5px 3px #777777;
  background-color: ${props => props.color ? '#325EFB' : '#FB3232'}
`;

export { CustomGrid, IsFullImg }
export default Wrapper;