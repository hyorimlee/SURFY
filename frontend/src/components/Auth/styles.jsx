import styled from 'styled-components';
import { Button, Dialog, DialogTitle, DialogContent, TextField } from '@material-ui/core';

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
  text-align: center;
`;

const CustomDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 97%;
  }
`;

const TestLoginBox = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    margin-top: 15px;
    font-size: 1.25rem;
  }
`;

const CustomTextField = styled(TextField)`
  width: 92%;
  padding: 10px 0 !important;
`;

const TestLoginBtn = styled(Button)`
  width: 92%;
  height: 50px;
  margin-top: 10px !important;
  border-radius: 10px !important;
`

export { CustomButton, CustomDialog, CustomDialogTitle, CustomDialogContent, TestLoginBox, TestLoginBtn, CustomTextField };