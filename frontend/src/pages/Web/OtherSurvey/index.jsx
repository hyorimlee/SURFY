import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { useNavigate } from 'react-router-dom';

import SurveyFormList from '../../../components/SurveyForm/SurveyFormList';

import Wrapper from './styles';


const OtherSurvey = () => {
  let navigate = useNavigate();

  const [surveys, setSurveys] = useState([]);
  const [isNowSurvey, setIsNowSurvey] = useState(0);
  const [selectedSurveyId, setSelectedSurveyId] = useState('0');
  const [answers, setAnswers] = useState({});

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
            <ListItemText primary={res.title} onClick={clickedSurvey(res.id)} />
          </ListItem>
        );
      })

      setSurveys(items);
    })
    console.log('inner')
  }, [])
  
  const clickedSurvey = (id) => () => {
    setIsNowSurvey(1);
    setSelectedSurveyId(id);
  }

  const endSurvey = () => {
    setIsNowSurvey(0);
    setSelectedSurveyId(0);
    navigate('roulette');
  }


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
      </div>
    </Wrapper>
  )
}

export default OtherSurvey;