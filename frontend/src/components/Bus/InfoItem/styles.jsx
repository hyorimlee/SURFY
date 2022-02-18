import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Wrapper = styled.div`
  height: 40px;
  margin: 0 0 10px 0;
  background-color: #ffffff;
  border-radius: 15px;

  & .header, .remain, .locate, .full {
    width: 70px;
    height: 29px;
    font-size: 1.2rem;
    text-align: center;
    line-height: 32px;
    background-color: #ffffff;
    border-radius: 15px;
  }

  & .remain {
    width: 100px;
    margin-right: 30px;
    margin-left: 40px;
  }

  & .locate {
    width: 100px;
    margin-left: 10px;

  }

  & .full {
    width: 70px;
    margin-left: 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const CustomGrid = styled(Grid)`
  height: 100%;
`;

const IsFullImg = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-shadow: 1.5px 1.5px 3px #777777;
  background-color: ${props => props.color ? '#325EFB' : '#FB3232'}
`;

export { CustomGrid, IsFullImg }
export default Wrapper;