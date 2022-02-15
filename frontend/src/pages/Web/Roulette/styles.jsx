import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  .rewardImage {
    width: 90%;
  }

  .rewardFont {
    font-family: monospace;
  }

  .rFont {
    font-size: 48px;
  }

  .spinBtn {
    background: #64AAFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    position: relative;
    width: 90%;
    height: 30px;
    font-size: 1.0em;
    padding: 0 1em;
    cursor: pointer;
    margin-top: 32px;
  }
`;

const CustomButton = styled(Button)`
  background-color: #64AAFF !important;
  border-radius: 10px !important;
`;

export { CustomButton };
export default Wrapper;