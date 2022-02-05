import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography
} from "@material-ui/core";
import {
  Menu,
  Person,
  Lock,
  Home
} from "@material-ui/icons";
import { Link } from 'react-router-dom'


import PaidIcon from '@mui/icons-material/Paid';
import PersonOffIcon from '@mui/icons-material/PersonOff';
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "홈",
    path:"/web"
  },
  {
    listIcon: <Person />,
    listText: "내 정보 수정",
    path:'/web/mypage/'
  },
  {
    listIcon: <Lock />,
    listText: "비밀번호 수정",
    path:'/web/mypage/passwordedit'
  },
  {
    listIcon: <PaidIcon />,
    listText: "내 지갑 보기",
    path:'/web/mypage/survey'
  },
  {
    listIcon: <PersonOffIcon />,
    listText: "탈퇴하기",
    path:'/web/mypage/withdraw'
  }
]

function Navbar(){
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="/images/민초.JPG"
        alt="민초"
      />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem} button key={index} component={Link} to={listItem.path}>
              <ListItemIcon className={classes.listItem} >
                  {listItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={listItem.listText}/>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return(
    <>
      <CssBaseline />
      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Typography>Logo 또는 빈칸</Typography>
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;