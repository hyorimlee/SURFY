import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { MoreVert} from '@material-ui/icons';

import { OuterGrid } from './styles';


const Header = (props) => {
  // const { isLogin } = props;
  let navigate = useNavigate();

  const [isLogin, setIsLogin] = useState('');
  const [nickname, setNickname] = useState('');
  const [mileage, setMileage] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  useEffect(() => {
    setIsLogin(localStorage.getItem('id'));
    
    fetch(`http://i6a204.p.ssafy.io:8000/api/member/code/${localStorage.getItem('id')}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      localStorage.setItem('pk', response.id);
      setNickname(response.member_code);

      fetch(`http://i6a204.p.ssafy.io:8000/api/mileage/${response.id}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        setMileage(response);
      })
    })

  }, []);

  const history = () => {
    navigate('/web/mileagesave');
    handleClose();
  }

  const withdraw = () => {
    navigate('/web/mileagereturn');
    handleClose();
  }

  const logout = () => {
    localStorage.removeItem('id');
    setNickname('');
    setMileage(0);
    handleClose();
  }

  return (
    <OuterGrid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="header"
    > 
      <Link to="/web">Home</Link>
      {
        isLogin
        ? (
          <div>
            <p>{nickname.slice(0, 4)} 님</p>
            <p>{mileage} 마일리지</p>
            <MoreVert onClick={handleClick}/>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={history}>마일리지 내역</MenuItem>
              <MenuItem onClick={withdraw}>마일리지 출금</MenuItem>
              {/* <MenuItem onClick={logout}>로그아웃</MenuItem> */}
            </Menu>
          </div>
        )
        : <></> 
      }
    </OuterGrid>
  );
}

export default Header;
