import React, { useState } from 'react';
// import Grid from '@material-ui/core';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Button, Grid } from '@material-ui/core/';
import Layout from '../../../layout/layout';
import Wrapper from './styles';

const MileageSave = (props) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('login') ? true : false);

  return (
    <Layout isLogin={isLogin}>
      <Wrapper>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div align="center">

          <Link to = "/web/mileagereturn" style={{textDecoration: 'none' }} className="lnk">
            <Button variant="contained" size="medium" className="btnClick">
              환급 받기
            </Button>        
          </Link>
          <List component="nav" aria-label="mailbox folders">
            {/* <Routes>
              <Route path="/web/mileagesave" element={<MileageReturn />} />
            </Routes> */}

            <p className="bdT">마일리지 내역</p>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
          </List>
          </div>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default MileageSave;