import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SurveyFormItem from '../SurveyFormItem';

import { Wrapper } from './styles';

const SurveyFormList = ({ surveyId, endSurvey }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [open, setOpen] = useState(false);
  const [dialogText, setDialogText] = useState('');

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
            <SurveyFormItem question={q} changed={changeAnswer}></SurveyFormItem>
          </SwiperSlide>
          )
        })
      items.push(
        <SwiperSlide key="btnSub">
          <Button variant="contained" color="primary" onClick={submit}>설문 제출하기</Button>
        </SwiperSlide>
        );
        setQuestions(items);
    })
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeAnswer = (value, id) => {
    setAnswers((preState) => {
      return {...preState, [id]: value};
    });
  }

  const submit = () => {
    let datas = {};
    let need;

    setAnswers((preState) => {
      datas = {...preState};
      return preState;
    })
    setQuestions(preState => {
      need = Object.keys({...preState}).length - 1;
      return preState;
    })
    
    let cnt = Object.keys(datas).length;
    
    if (need !== Object.keys(datas).length) {
      setDialogText('모든 설문을 입력해주세요.');
      handleClickOpen();
    } else {
      Object.keys(datas).forEach(k => {
        fetch(`http://i6a204.p.ssafy.io:8000/api/survey/versus`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            member_id: Number(localStorage.getItem('pk')),
            survey_id: Number(surveyId),
            question_id: Number(k),
            option_id: 0,
            value: datas[k]
          })
        })
        .then(() => {
          cnt--;
        })
      })
      
      setTimeout(() => {
        if (cnt <= 0) {
          setDialogText('설문이 정상적으로 종료되었습니다.');
          handleClickOpen();
        } else {
          setDialogText('오류가 발생했습니다. 다시 시도해주세요.');
          handleClickOpen();
        }
      }, 300);
    }

  }

  const finished = () => {
    if (dialogText === '설문이 정상적으로 종료되었습니다.') {
      endSurvey();
    } else {
      handleClose();
    }
  }

  return (
    <Wrapper>
      <Swiper className="mySwiper">
        {questions}
      </Swiper>
      <Dialog
        open={open}
        onClose={finished}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">설문 종료</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={finished} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
}

export default SurveyFormList;