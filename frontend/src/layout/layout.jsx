import React from 'react';


import Header from './Header/index'
import Wrapper from './styles';
<<<<<<< HEAD
=======

>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
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