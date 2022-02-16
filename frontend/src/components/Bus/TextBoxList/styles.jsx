import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Wrapper = styled.div`
  width: 100%;
  color: black;
  padding: 30px;
`;

const CustomGrid = styled(Grid)`
  padding: 7px !important;
  text-align: center !important;
  font-size: ${ props => props.children.length >= 5 ? "1.7rem" : "1.9rem" };
`;

export { CustomGrid };
export default Wrapper;