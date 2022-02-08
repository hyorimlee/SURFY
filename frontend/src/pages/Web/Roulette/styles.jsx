import styled from 'styled-components';

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background-color: white;

  .rHead {
    background-color: #65FFBA;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .paper {
    position: absolute;
    width: 70%;
    border: 2px solid #000;
    font-size: 20px;
    text-align: center;
    background-color: grey;    
  }

  .loginBtn {
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