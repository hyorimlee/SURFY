import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Wrapper = styled.div`
  width: 100%;
  color: black;
  padding: 30px;
`;

const CustomGrid = styled(Grid)`
  font-size: ${ props => props.children.length >= 5 ? "2rem" : "2.4rem" };
`;

export { CustomGrid };
export default Wrapper;