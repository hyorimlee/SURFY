import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';

import CardComponent from '../../../components/Card';
import Vote from '../../../components/Vote/index';

import { CustomGrid, CustomCircularProgress } from './styles';


const Survey = () => {
  const [surveyTitle, setSurveyTitle] = useState('baskinRobbins');              // 설문조사 타이틀
  const [surveyContent, setSurveyContent] = useState(['민초', '반민초']);       // 설문 내용
  const [voted, setVoted] = useState('');                                       // 설문 투표 됬는지 여부
  const [voteData, setVoteData] = useState({
    categories: [surveyTitle],
    series: [
      {
        name: '민초',
        data: 27,
      },
      {
        name: '반민초',
        data: 12,
      }
    ]
  });
  const [timerDone, setTimerDone] = useState(false);

  // 투표 실행
  const vote = (event) => {
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/api/',
    //   data: {
    //     surveyTitle,
    //     voted,
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    // })

    setTimeout(() => {
      setTimerDone(true);
    }, 2000);

    setVoted(event.target.name);
  }

  const resetVote = () => {
    setVoted('');
    setTimerDone(false);
    // setVoteData({});
  }

  return (
    <CustomGrid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {
        voted
        ? !voteData || !timerDone ? <CustomCircularProgress size={130} /> : <Vote surveyTitle={surveyTitle} onTime={resetVote} voteData={voteData}></Vote>
        : (
            <>
              <div className="qstn">
                당신은 민초파? 반민초파?         
              </div>
              <CardComponent onVote={vote} surveyContent={surveyContent} />
            </>
          )
      }
    </CustomGrid>
  );
}

export default Survey;