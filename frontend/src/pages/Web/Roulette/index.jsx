import React, { useState } from 'react';
import { Wheel } from "react-custom-roulette";
import Login from '../../../components/Auth/Login/index';
import { makeStyles, Modal } from '@material-ui/core/';
import Layout from '../../../layout/layout';
import Wrapper from './styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    width: '100vw',
    height: '100vh',
    display: "flex !import",
    alignItems: "center !important",
    justifyContent: "center !important",
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

const data = [
  { id: 1, option: "100마일리지" },
  { id: 2, option: "200마일리지" },
  { id: 3, option: "300마일리지" },
  { id: 4, option: "400마일리지" },
  { id: 5, option: "500마일리지" },
  { id: 6, option: "600마일리지" }
];

export default function Roulette() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') ? true : false);
  const classes = useStyles();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(1);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">당첨을 축하합니다!</h2>
      <p id="simple-modal-description">{data[prizeNumber].option}</p>
      <Login></Login>
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
          <br/><br/><br/><br/><br/><br/>

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
            {body}
          </Modal>
        </div>
      </Wrapper>
    </Layout>
  );
}