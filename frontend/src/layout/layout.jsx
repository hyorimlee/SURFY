import styled from 'styled-components'
import Drawer from './Drawer'
import Header from './Header'

const Layout = (props) => {
  return (
    <Container>
        <Header />       
        <Drawer />  
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Layout;