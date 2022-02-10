import React from 'react';
import Wrapper from './styles';
import InfoWindow from './Infowindow'
const Marker = (props) => {
    // const { color, name, id } = props;
    return (
      <Wrapper>
          {props.target_v && <InfoWindow place={props}/>}
        <div className="pin bounce"
          style={{ backgroundColor: props.color, cursor: 'pointer'}} />
        <div className='pulse' />
      </Wrapper>
      
    );
  };

  export default Marker;