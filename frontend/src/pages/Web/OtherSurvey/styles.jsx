import styled from 'styled-components';

const Wrapper = styled.div`
  width: 360px;
  height: 784px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  .ques {
    font-size: 20px;
  }

  .oSvy {
    width: 312px;
    height: 60px;
    margin-top: 16px;
    background-color: #C8C8FF;
    text-align: center;
    border-radius: 16px;
  }
`;

export default Wrapper;