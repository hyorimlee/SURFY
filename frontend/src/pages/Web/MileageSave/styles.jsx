import styled from 'styled-components';
import { Grid, ListItem } from '@material-ui/core';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .lnk {
    display: flex;
    justify-content: end;
    margin-bottom: 48px;

  }

  .btnClick {
    width: 110px;
    height: 40px;
    background-color: #96E0CE;
  }

  .bdT {
    font-size: 20px;
    margin-bottom: 16px;
  }
  
  .breakDown {
    width: 300px;
    background-color: lightgrey;
    margin-top: 12px;
  }

`;

const CustomGrid = styled(Grid)`
  width: 100%;

  & p {
    text-align: center;
  }
`

const CustomListItem = styled(ListItem)`
  background-color: ${props => props.children[1].props.children[0].props.color} !important;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  align-items: flex-start !important;

  & .title > span {
    font-size: 1.25rem !important;
    font-weight: 500 !important;
  }

  & .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    
    & > div {
      text-align: center;
    }
  }
`;

export { CustomGrid, CustomListItem };
export default Wrapper;