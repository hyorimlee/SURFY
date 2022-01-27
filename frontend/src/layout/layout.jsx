import React from 'react';
import { Container } from '@material-ui/core';

import Header from './Header/index'
import Wrapper from './styles';
const Layout = (props) => {
  return (
    <Wrapper>
      {window.location.pathname.includes('/web')
        ? <Header isLogin={props.isLogin}/>
        : null
      }
      <Container
        maxWidth="xl"
      >
        <div className='container'>
          {props.children}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Layout;