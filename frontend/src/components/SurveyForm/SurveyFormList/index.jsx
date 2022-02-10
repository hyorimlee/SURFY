import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SurveyFormItem from '../SurveyFormItem';

import { Wrapper } from './styles';

const SurveyFormList = ({ surveyId }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  useEffect(() => {
    let items = [];

    fetch(`http://i6a204.p.ssafy.io:8000/api/survey/question/${surveyId}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      response.forEach(q => {
        items.push(
          <SwiperSlide key={q.id}>
            <SurveyFormItem question={q} answer={changeAnswer}></SurveyFormItem>
          </SwiperSlide>
          )        
        })
      setQuestions(items);
    })
  }, [surveyId]);

  const changeAnswer = (event) => {
    console.log(event.target.value);
  }

  return (
    <Wrapper>
      <Swiper className="mySwiper">
        {questions}
      </Swiper>
    </Wrapper>
  );
}

export default SurveyFormList;