import styled from 'styled-components';

<<<<<<< HEAD
const Wrapper = styled.div`
  width: 600px;
  height: 50px;
  background-color: #FF9364;

  .auth {
    color: white;
    padding-right: 8px;
  }

`;


export default Wrapper;
=======
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
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
