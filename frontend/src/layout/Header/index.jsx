import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Wrapper from './styles';

const Header = (props) => {
  const { isLogin } = props;

  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="header"
      >
        <p>Logo</p>
        {
          isLogin
          ? <p>Account</p>
          : (
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Link to="signin" className="auth">로그인</Link>
              <Link to="signup" className="auth">회원가입</Link>
              <Link to="mypage">마이페이지</Link>
            </Grid>
          )
        }
      </Grid>
    </Wrapper>
  );
}

export default Header;