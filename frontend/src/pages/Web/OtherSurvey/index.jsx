import React from 'react';
// import Grid from '@material-ui/core';
import { List, ListItem, ListItemText, Avatar } from '@material-ui/core/';
import Wrapper from './styles';

const OtherSurvey = () => {

  return (
    <Wrapper>
      <div align="center">
      <List component="nav" aria-label="mailbox folders">
        <p className="ques">추가 설문을 하시겠습니까?</p>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
        <ListItem 
          button 
          className="oSvy"
        >
          <Avatar alt="" src="images/doge.jpg"/>
          <ListItemText primary="설문 주제" />
        </ListItem>
      </List>
      </div>
    </Wrapper>
  )
}

export default OtherSurvey;