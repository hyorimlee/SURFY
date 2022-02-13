import React from 'react';
import Wrapper from './styles'
const InfoWindow = ({place}) => {
  
  const infoWindowStyle = {
    position: "relative",
    bottom: 50,
    left: "20px",
    width: 100,
    backgroundColor: "white",
    boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <Wrapper>
      <div style={infoWindowStyle}>
        <img src={place.img_path} width='100' height='100' alt='place_img' />
        <div style={{fontSize: 12}} >{place.text}</div>
        <hr/>
        <div style={{fontSize: 10}} >{place.op_time}</div>
      </div>
    </Wrapper>
  )
}
export default InfoWindow;