import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Roboto';
  width: 98%;

  background-color: #456173;
  border-top: 2px solid #bbbbbb;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InfoHeader = styled.div`
  width: 100%;
  font-size: 3rem;
  color: white;
  margin: 10px 0 40px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & p {
    padding: 0 30px;
  }
`;

const InfoContent = styled.div`
  width: 100%;
  height: 840px;
`;

export { InfoHeader, InfoContent }
export default Wrapper;