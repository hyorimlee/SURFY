import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core/';
import { useNavigate } from 'react-router-dom';

import SurveyFormList from '../../../components/SurveyForm/SurveyFormList';

import Wrapper from './styles';


const OtherSurvey = () => {
  let navigate = useNavigate();

  const [surveys, setSurveys] = useState([]);
  const [isNowSurvey, setIsNowSurvey] = useState(0);
  const [selectedSurveyId, setSelectedSurveyId] = useState('0');
  const [answers, setAnswers] = useState({});
  const [open, setOpen] = useState(false);

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
            <ListItemText className="surveyBtn" primary={res.title} onClick={clickedSurvey(res.id)} />
          </ListItem>
        );
      })

      setSurveys(items);
    })
    console.log('inner')
  }, [])
  
  const clickedSurvey = (id) => () => {
    const query = { 'surveyId': id, 'memberId': localStorage.getItem('pk') };
    const url = new URL('http://i6a204.p.ssafy.io:8000/api/survey/member');
    Object.keys(query).forEach(q => {
      url.searchParams.append(q, query[q]);
    })

    fetch(url)
    .then(response => response.json())
    .then(response => {
      if (response.surveyed === true) {
        handleClickOpen();
      } else {
        setSelectedSurveyId(id);
        setIsNowSurvey(1);
      }
    })
  }

  const endSurvey = () => {
    navigate(`roulette/${selectedSurveyId}`);
    setIsNowSurvey(0);
    setSelectedSurveyId(0);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Wrapper>
      <div align="center">
        {
          isNowSurvey
          ?
          (
            <SurveyFormList surveyId={selectedSurveyId} endSurvey={endSurvey}></SurveyFormList>
          )
          :
          (
            <List component="nav" aria-label="mailbox folders">
              <p className="ques">추가 설문을 하시겠습니까?</p>
              {surveys}
            </List>
          )
        }
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">이미 참여한 설문입니다.</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              이미 참여한 설문입니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Wrapper>
  )
}

export default OtherSurvey;