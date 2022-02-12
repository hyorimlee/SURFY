import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .selectBtn {
    width: 280px;
  }

  .inputLabel {
    width: 280px;
    height: 41px; !important
  }

  .btnClick {
    width: 280px;
    height: 41px;

    background-color: #64AAFF;
  }
`;

export default Wrapper;