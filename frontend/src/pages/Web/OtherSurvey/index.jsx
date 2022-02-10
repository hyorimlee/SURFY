import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Avatar } from '@material-ui/core/';
import Wrapper from './styles';


const OtherSurvey = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const query = { 'versus': 0, 'count': 100 }
    const url = new URL('http://i6a204.p.ssafy.io:8000/api/survey');
    Object.keys(query).forEach(q => {
      url.searchParams.append(q, query[q]);
    });
    
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(response => {
      let items = []

      response.forEach(res => {
        items.push(
          <ListItem 
            button 
            className="oSvy"
            key={res.id}
          >
            <ListItemText primary={res.title} />
          </ListItem>
        );
      })

      setSurveys(items);
    })
    console.log('inner')
  }, [])
  

  console.log(surveys);
  return (
    <Wrapper>
      <div align="center">
        <List component="nav" aria-label="mailbox folders">
          <p className="ques">추가 설문을 하시겠습니까?</p>
          {surveys}
        </List>
      </div>
    </Wrapper>
  )
}

export default OtherSurvey;