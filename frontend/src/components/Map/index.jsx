import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import Wrapper from './styles';

const Map = () => {
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordinates = { lat: 37.5160119113, lng: 126.9056181532 };

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCTN3OB3D4Z-lYh-jR20UWHeoezNcpkQKQ' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        // margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      >

      </GoogleMapReact>
    </Wrapper>
  )
}

export default Map;