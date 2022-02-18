import styled from 'styled-components';
import { Dialog, DialogTitle } from '@material-ui/core';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .coinImage {
    width: 90%;
    margin: 60px 0;
  }
  
  .selectBtn {
    width: 280px;
  }

  .inputLabel {
    width: 280px;
    height: 41px !important;
  }

  .btnClick {
    width: 280px;
    height: 41px;
    margin-top: 8px;
    background-color: ${props => props.children.props.children[3].props.grey !== "true" ? "#64AAFF" : "lightgrey"};
  }
`;

const CustomDialog = styled(Dialog)`
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 100vw !important;
  height: 100vh !important;
`;

const CustomDialogTitle = styled(DialogTitle)`
  text-align: center !important;
`;



export { Wrapper, CustomDialog, CustomDialogTitle };