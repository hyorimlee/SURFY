import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardComponent from '../../../components/Card';
import Vote from '../../../components/Vote/index';

import { CustomGrid, CustomCircularProgress } from './styles';


const useGetVersus = (voted) => {
  const [versusData, setVersusData] = useState({id: '', questions: [{options: [{value: '민초'}, {value: '반민초'}]}]});
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getVersus = async () => {
      try {
        // 랜덤으로 VS 설문 주제 가져오기
        const versus = await axios({
          method: 'get',
          url: 'http://i6a204.p.ssafy.io:8000/api/survey',
          params: {
            versus: 1,
            count: 1,
          }
        });

        // 가져온 VS 설문 주제의 PK 값으로 상세 선택지와 옵션들 가져오기
        const questions = await axios({
          method: 'get',
          url: `http://i6a204.p.ssafy.io:8000/api/survey/${versus.data[0].id}`,
        });

        setVersusData(questions.data);
        
        if (questions.data.questions[0].options[0].img_path) {
          fetch(`http://i6a204.p.ssafy.io:8000/api/survey/image/${questions.data.questions[0].options[0].id}`)
            .then(response => response.blob())
            .then(imgBlob => {
              const firstImg = URL.createObjectURL(imgBlob);
  
              fetch(`http://i6a204.p.ssafy.io:8000/api/survey/image/${questions.data.questions[0].options[1].id}`)
                .then(response => response.blob())
                .then(imgBlob => {
                  const secondImg = URL.createObjectURL(imgBlob);
                  setImage([firstImg, secondImg])
                })
            })
        }
      } catch (error) {
        console.error(error);
      }
    }
    getVersus();
  }, [voted])

  return { versusData, image };
}

const Survey = () => {
  const [voted, setVoted] = useState('');                       // 설문 투표 됬는지 여부
  const [timerDone, setTimerDone] = useState(false);            // 로딩 여부
  const [voteData, setVoteData] = useState({});
  
  let { versusData, image } = useGetVersus(voted);
  console.log(versusData);

  // 투표 실행
  const vote = async (event) => {
    const save = await axios({
      method: 'post',
      url: 'http://i6a204.p.ssafy.io:8000/api/survey/versus',
      data: {
        member_id: 1,
        survey_id: versusData.id,
        question_id: versusData.questions[0].id,
        option_id: event.target.name,
      }
    })

    if (save) {
      const response = await axios({
        method: 'get',
        url: `http://i6a204.p.ssafy.io:8000/api/survey/option/${versusData.questions[0].id}`,
      })

      setVoteData({
        series: [
          {
            name: response.data[0].value,
            data: response.data[0].count,
          },
          {
            name: response.data[1].value,
            data: response.data[1].count,
          }
        ]
      })
    }

    setTimeout(() => {
      setTimerDone(true);
    }, (Math.random() * 1000) + 1000);

    setVoted(event.target.name);
  }

  const resetVote = () => {
    setVoted('');
    setTimerDone(false);
    versusData = {}
    image = {}
    console.log(image)
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
        ? !voteData || !timerDone ? <CustomCircularProgress size={130} /> : <Vote onTime={resetVote} voteData={voteData}></Vote>
        : (
            <>
              <div className="qstn" >
                <p>{versusData.questions[0].content}</p>
                <p>당신의 선택은?!</p>
              </div>
              <CardComponent onVote={vote} surveyContent={[versusData.questions[0].options[0].id, versusData.questions[0].options[1].id]} image={image} />
            </>
          )
      }
    </CustomGrid>
  );
}

export default Survey;