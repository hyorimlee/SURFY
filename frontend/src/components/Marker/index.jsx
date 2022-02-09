import React from 'react';
import Wrapper from './styles';
import InfoWindow from './Infowindow'
const Marker = (props) => {
    // const { color, name, id } = props;
    return (
      <div>
      {props.target_v && <InfoWindow place={props}/>}
      <Wrapper
      alt={props.text}
      >
        {/* {props.target_v && <InfoWindow place={props}/>} */}
        <div className="pin bounce"
        style={{ backgroundColor: props.color, cursor: 'pointer'}} />
      </Wrapper>
      </div>
    );
  };

  export default Marker;