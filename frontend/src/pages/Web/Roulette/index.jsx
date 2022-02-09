import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Login from '../../../components/Auth/Login/index';
import Wrapper from './styles';


const data = [
  { id: 1, option: "꽝" },
  { id: 2, option: "200마일리지" },
  { id: 3, option: "꽝" },
  { id: 4, option: "500마일리지" },
  { id: 5, option: "꽝" },
  { id: 6, option: "800마일리지" }
];

const Roulette = (props) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(1);
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  
  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  
  return (
    <Wrapper>
      <div align="center">
        <div className="rHead">
          행운의 결과는?
        </div>        
        <br/><br/><br/><br/><br/><br/><br/>
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
            // handleOpen();
          }}
        />
        <br/><br/>< br/><br/><br/><br/><br/>
        {/* <div className="btn"> */}
        <button className="spinBtn" onClick={handleSpinClick}>
          룰렛 돌리기
        </button>
        <br />
        <div>
          { 
            data[prizeNumber].option === "꽝"
              ? (<div>"{!mustSpin ? data[prizeNumber].option : "0"}"입니다.</div>)
              : (<div>"{!mustSpin ? data[prizeNumber].option : "0"}"이 당첨되었습니다."</div>)          
          }
        </div>
        <Login></Login>
        

      </div>
    </Wrapper>
  );
}

export default Roulette;
