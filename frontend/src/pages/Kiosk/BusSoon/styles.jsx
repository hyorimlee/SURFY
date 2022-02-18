import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Roboto';
  width: 98%;
  height: 112px;
  
  background-color: #456173;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > p {
    color: white;
    font-size: 2.5rem;
    margin: 0 20px;
  }

  & .bus-soon--list {
    width: 754px;
    height: 80%;
    margin: 0 20px;
    border-radius: 10px;
    background-color: white;

    display: flex;
    align-items: center;
  }
`;

export default Wrapper;