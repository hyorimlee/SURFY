import styled from 'styled-components';
import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';

const CustomButton = styled(Button)`
  background-color: rgb(139,222,255) !important;
  border-radius: 10px !important;
`;

const CustomDialog = styled(Dialog)`
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;

  width: 100vw !important;
  height: 100vh !important;
`;

const CustomDialogTitle = styled(DialogTitle)`
`;

const CustomDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export { CustomButton, CustomDialog, CustomDialogTitle, CustomDialogContent };