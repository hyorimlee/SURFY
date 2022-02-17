import styled from 'styled-components';
import { Chip } from '@material-ui/core';

const CustomChip = styled(Chip)`
  width: 35vw;
  height: 6vh !important;

  background-color: #ffffff !important;
  border-radius: 40px !important;
  
  font-size: 3.2rem !important;
  font-weight: 500;
`;

export { CustomChip };