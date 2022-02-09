<<<<<<< HEAD
import React, { useState,useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';
import Wrapper from './styles';
import axios from 'axios';
=======
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';
import Wrapper from './styles';
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562

const Map = (props) => {
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };
<<<<<<< HEAD
  const [center, setCenter] = useState({ lat: 37.5160119113, lng: 126.9056181532 });
  const [zoom, setZoom] = useState(11);
  const [markerdata, setmarkerdata] = useState(null);
  const [target, setTarget] = useState(null);
  
  const [mapdata, setmapdata] = useState([]);
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
  const markerClicked = (key) => {
    setTarget(key);
  }

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCTN3OB3D4Z-lYh-jR20UWHeoezNcpkQKQ' }}
        defaultCenter={center}
        defaultZoom={15}
        options={getMapOptions}
        onChildClick={markerClicked}
      >
        {mapdata.map((data, index) => (
          <Marker 
          key = {data.id}
          lat = {data.x}
          lng = {data.y}
          text = {data.name}
          op_time = {data.operating_time}
          color = "blue"
          target_v = {data.id == target}
          place={data}
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
=======

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
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562

export default Map;