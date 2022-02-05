import React, { useState,useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';
import Wrapper from './styles';
import axios from 'axios';

const Map = (props) => {
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };
  const [mapdata, setmapdata] = useState([]);
  const [center, setCenter] = useState({ lat: 37.5160119113, lng: 126.9056181532 });
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    const test = () =>{
      axios({
        method:'GET',
        url : `http://localhost:8000/data`,
      })
      .then((response)=>{
        setmapdata(response.data);
      })
      .catch(() =>{
        console.log('맵오류')
      })
    };
    test();
  }, []);
  
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCTN3OB3D4Z-lYh-jR20UWHeoezNcpkQKQ' }}
        defaultCenter={center}
        defaultZoom={15}
        options={getMapOptions}
      >
        {mapdata.map((data, index) => (
          <Marker key={index}
          lat = {data.x}
          lng = {data.y}
          text = {data.name}
          />
        ))}
        <Marker
          lat={37.5160119112}
          lng={126.9056181531}
          text="My Marker"
          color="red"
        />
      </GoogleMapReact>
    </Wrapper>
  );
};

export default Map;