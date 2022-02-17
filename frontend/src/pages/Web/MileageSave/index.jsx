import React, { useState, useEffect } from 'react';
// import Grid from '@material-ui/core';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Button, Grid } from '@material-ui/core/';
import Layout from '../../../layout/layout';
import Wrapper, { CustomGrid, CustomListItem } from './styles';

const MileageSave = (props) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') ? true : false);
  const [mileageHistory, setMileageHistory] = useState([]);

  useEffect(() => {
    fetch(`http://i6a204.p.ssafy.io:8000/api/member/code/${localStorage.getItem('id')}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      const query = { 'memberId': response.id, 'limit': 100 };
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

        response.forEach(res => {
          if (res.amount !== 0) {
            const date = new Date(res.timestamp);
            items.push(
              <CustomListItem key={res.id} className="breakDown">
                <ListItemText className="title" primary={`[${res.amount >= 0 ? '적립' : '출금'}]`}/>
                <div className="content">
                  <ListItemText primary={`${res.amount >= 0 ? res.amount : -res.amount} 마일리지`} color={res.amount > 0 ? '#c8c8ff' : '#e9b1f3'}/>
                  <ListItemText primary={`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`}/>
                </div>
              </CustomListItem>
            );
          }
        })

        setMileageHistory(items);
      })
    })
  }, []);

  return (
    <Layout isLogin={isLogin}>
      <Wrapper>
        <CustomGrid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <List component="nav" aria-label="mailbox folders">
            <p className="bdT">마일리지 내역</p>
            {
              mileageHistory.length === 0
              ? <p>마일리지 내역이 없습니다.</p>
              : mileageHistory
            }
          </List>
        </CustomGrid>
      </Wrapper>
    </Layout>
  )
}

export default MileageSave;