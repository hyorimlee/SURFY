import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Wrapper = styled.div`
  width: 280px !important;
  color: black;
  padding: 5px;
`;

const CustomGrid = styled(Grid)`
  padding: 2px !important;
  text-align: center !important;
  font-size: ${ props => props.children.length >= 5 ? "1rem" : "1.2rem" };
`;

export { CustomGrid };
export default Wrapper;