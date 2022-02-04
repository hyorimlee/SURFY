import React from 'react';
import Wrapper from './styles';

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
    );
  };

  export default Marker;