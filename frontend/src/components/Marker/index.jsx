import React from 'react';
import Wrapper from './styles';
<<<<<<< HEAD
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
=======

const Marker = (props) => {
    const { color, name, id } = props;
    return (
      <Wrapper>
        <div 
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer'}}
          title={name}
        />
        <div className='pulse' />
      </Wrapper>
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
    );
  };

  export default Marker;