import styled from 'styled-components';

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
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

export default Wrapper;