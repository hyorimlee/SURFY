import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Wrapper = styled.div`
  height: 29px;
  margin: 0 0 10px 0;
  background-color: #ffffff;
  border-radius: 15px;

  & .header, .remain, .locate, .full {
    width: 100px;
    height: 29px;
    font-size: 0.8rem;
    text-align: center;
    line-height: 32px;
    background-color: #ffffff;
    border-radius: 15px;
  }

  & .remain {
    width: 120px;
    // margin-right: 30px;
    // margin-left: 30px;
  }

  & .locate {
    width: 150px;
    margin-left: 10px;

  }

  & .full {
    width: 70px;
    margin-left: 30px;

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