import React, { useState } from 'react';
import axios from 'axios';

import CardComponent from '../../../components/Card';
import Vote from '../../../components/Vote/index';

import Wrapper from './styles';

const Survey = () => {
  const [surveyTitle, setSurveyTitle] = useState('baskinRobbins');                           // 설문조사 타이틀
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
    setVoted(event.target.name);
  }

  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <div className="qstn">
          당신은 민초파? 반민초파?         
        </div>
        {
          voted
          ? <Vote surveyTitle={surveyTitle} voted={voted} voteData={voteData}></Vote>
          : <CardComponent onVote={vote} surveyContent={surveyContent} />
        }
      </Grid>
    </Wrapper>
  );
}

export default Survey;