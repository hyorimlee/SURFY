import React, { useState } from 'react';
import { Wheel } from "react-custom-roulette";
import Auth from '../../../components/Auth/index';
import { makeStyles, Modal } from '@material-ui/core/';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../../layout/layout';
import Wrapper, { CustomButton } from './styles';
import { useEffect } from 'react';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  paper: {
    position: 'absolute',
    width: '70%',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Roulette() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') ? true : false);
  const classes = useStyles();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(1);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [isAlready, setIsAlready] = useState(false);

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    fetch(`http://i6a204.p.ssafy.io:8000/api/survey/reward/${params.surveyId}`)
    .then(response => response.json())
    .then(response => {
      const rewards = response.map(res => {
        return { 'id': res.id, 'option': `${res.reward} 마일리지` };
      })

      setData(rewards);
    })
  }, [])
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSpinClick = () => {
    const query = { 'surveyId': params.surveyId, 'memberId': localStorage.getItem('pk') };
    const url = new URL('http://i6a204.p.ssafy.io:8000/api/survey/member');
    Object.keys(query).forEach(q => {
      url.searchParams.append(q, query[q]);
    })

    fetch(url).then(response => response.json())
    .then(response => {
      if (response.surveyed && localStorage.getItem('pk')) {
        setIsAlready(true);
        handleOpen();
      } else {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
      }
    })
  };

  const saveMileage = () => {
    const query = { 'surveyId': params.surveyId, 'memberId': localStorage.getItem('pk') };
    const url = new URL('http://i6a204.p.ssafy.io:8000/api/survey/member');
    Object.keys(query).forEach(q => {
      url.searchParams.append(q, query[q]);
    })

    fetch(url).then(response => response.json())
    .then(response => {
      if (response.surveyed) {
        setIsAlready(true);
        handleOpen();
      } else {
        fetch('http://i6a204.p.ssafy.io:8000/api/roulette', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            'memberId': Number(localStorage.getItem('pk')),
            'rewardId': data[prizeNumber].id,
            'surveyId': Number(params.surveyId),
          })
        })
        .then(() => console.log('saveMileage fetch Done'))
        
        handleClose();
        
        navigate('/web/');
      }
    })
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">당첨을 축하합니다!</h2>
      {data.length > 0 ? <p id="simple-modal-description">{data[prizeNumber].option}</p> : <></>}
      {
        isLogin
        ? <CustomButton onClick={saveMileage}>적립 받기</CustomButton>
        : <Auth logined={saveMileage}></Auth>
      }
    </div>
  );

  const already = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">이미 참여한 설문입니다.</h2>
    </div>
  );

  return (
    <Layout isLogin={isLogin}>
      <Wrapper>
        <div align="center">
          <br/><br/><br/><br/>
          <img className="rewardImage" alt="" src="/images/rewardimg.png"/>
          <p className="rewardFont">※ 룰렛은 설문당 1번만 가능합니다.</p>
          <br/><br/><br/><br/><br/>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            outerBorderColor={["#f2f2f2"]}
            outerBorderWidth={[3]}
            innerBorderColor={["#f2f2f2"]}
            radiusLineColor={["#dedede"]}
            radiusLineWidth={[3]}
            textColors={["#ffffff"]}
            fontSize={[15]}
            textDistance={65}
            perpendicularText={[true]}
            backgroundColors={[
              "#F22B35",
              "#F99533",
              "#24CA69",
              "#514E50",
              "#46AEFF",
              "#9145B7"
            ]}
            onStopSpinning={() => {
              setMustSpin(false);
              handleOpen();
            }}
          />
          <br/><br/><br/><br/><br/>

          <button 
            className="spinBtn" 
            onClick={(e) => {
              handleSpinClick(e);
              e.currentTarget.disabled = true;
            }}
          >
            마일리지 룰렛 돌리기
          </button>

          <Modal open={open} onClose={handleClose} className={classes.modal}>
            {
              isAlready
              ? already 
              : body
            }
          </Modal>
        </div>
      </Wrapper>
    </Layout>
  );
}