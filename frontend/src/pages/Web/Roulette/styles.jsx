import styled from 'styled-components';

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background-color: white;

  .rHead {
    background-color: #65FFBA;
    height: 40px;
    font-size: 1.0em;
    margin-bottom: 32px;
  }

  .btn {
    display: flex;
    justify-content: space-evenly;
  }

  .spinBtn {
    background: #1AAB8A;
    color: #fff;
    border: none;
    border-radius: 16px;
    position: relative;
    height: 30px;
    font-size: 1.0em;
    padding: 0 1em;
    cursor: pointer;
    margin-top: 32px;
  }
`;


export default Wrapper;