import React, { useState, useEffect } from 'react';
// import Grid from '@material-ui/core';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Button, Grid } from '@material-ui/core/';
import Layout from '../../../layout/layout';
import Wrapper from './styles';

const MileageSave = (props) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') ? true : false);
  const [mileageHistory, setMileageHistory] = useState([]);

  useEffect(() => {
    fetch(`http://i6a204.p.ssafy.io:8000/api/member/code/${localStorage.getItem('id')}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      const query = { 'memberId': response.id, 'limit': 0 };
      const url = new URL('http://i6a204.p.ssafy.io:8000/api/mileage/history');
      Object.keys(query).forEach(q => {
        url.searchParams.append(q, query[q]);
      })

      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(response => {
        let items = [];
        console.log(response);

        response.forEach(res => {
          items.push(
            <ListItem className="breakDown">
              <ListItemText primary="1000 마일리지"/>
            </ListItem>
          );
        })

        setMileageHistory(items);
      })
    })
  }, []);

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

          {/* <Link to = "/web/mileagereturn" style={{textDecoration: 'none' }} className="lnk">
            <Button variant="contained" size="medium" className="btnClick">
              환급 받기
            </Button>        
          </Link> */}
          <List component="nav" aria-label="mailbox folders">
            {/* <Routes>
              <Route path="/web/mileagesave" element={<MileageReturn />} />
            </Routes> */}

            <p className="bdT">마일리지 내역</p>
            {
              mileageHistory.length === 0
              ? <p>마일리지 내역이 없습니다.</p>
              : mileageHistory
            }
          </List>
          </div>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default MileageSave;