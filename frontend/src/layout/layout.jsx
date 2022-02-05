import React from 'react';


import Header from './Header/index'
import Wrapper from './styles';
const Layout = (props) => {
  return (
    <Wrapper>
      {window.location.pathname.includes('/web')
        ? <Header isLogin={props.isLogin}/>
        : null
      }
      <div className='container'>
        {props.children}
      </div>
    </Wrapper>
  );
};

export default Layout;