import React from 'react';
import Wrapper from './styles'
const InfoWindow = ({place}) => {
  return (
    <Wrapper >
      <div className="infowindow" style={{width: 100, height:150}}>
        {place.text}
        <hr/>
        {place.op_time}
      </div>
      {/* <textarea value={place.text + '\n' + place.op_time} cols="30" rows="10">
      </textarea> */}
    </Wrapper>
  
  )
}
export default InfoWindow;