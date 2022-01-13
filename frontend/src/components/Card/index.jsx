import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function CardComponent() {
  return (
    <Card sx={{ maxWidth: 100 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height = "100"
          image = "/images/mint.JPG"
          onClick= {() => {console.log('click!!');}}
        >
        </CardMedia>
      </CardActionArea>
    </Card>
  );
}