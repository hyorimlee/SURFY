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
        <p></p>
        {
          isLogin
          ? <Link Link to="mypage">mileage</Link>
          : (
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              {/* <Link to="signin" className="lg">로그인</Link>
              <Link to="signup" className="su">회원가입</Link>               */}
            </Grid>
          )
        }
      </Grid>
    </Wrapper>
  );
}

export default Header;
