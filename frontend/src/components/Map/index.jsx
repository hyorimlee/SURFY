import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';
import Wrapper from './styles';

const Map = (props) => {
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

    const [center, setCenter] = useState({ lat: 37.5160119113, lng: 126.9056181532 });
    const [zoom, setZoom] = useState(11);

    return (
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTN3OB3D4Z-lYh-jR20UWHeoezNcpkQKQ' }}
          defaultCenter={center}
          defaultZoom={15}
          options={getMapOptions}
        >
          <Marker
            lat={37.5160119112}
            lng={126.9056181531}
            text="My Marker"
            color="red"
          />
        </GoogleMapReact>
      </Wrapper>
    );
}

export default Map;