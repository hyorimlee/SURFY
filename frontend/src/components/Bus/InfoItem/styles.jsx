import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Wrapper = styled.div`
  height: 5vh;
  margin: 0 0 10px 0;
  background-color: #ffffff;
  border-radius: 15px;

  & .header, .remain, .locate, .full {
    width: 20vw;
    height: 96px;
    font-size: 2.5rem;
    text-align: center;
    line-height: 100px;
    background-color: #ffffff;
    border-radius: 15px;
  }

  & .remain {
    width: 20vw;
    margin-right: 30px;
    margin-left: 30px;
  }

  & .locate {
    width: 20vw;
    margin-right: 50px;
    margin-left: 50px;
  }

  & .full {
    width: 15vw;
    margin-left: 42px;

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