import React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid, CardMedia, Card } from '@mui/material';


export default function CardComponent() {
  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
      <Grid>
        <Card sx={{ maxWidth: 100 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height = "100"
              image = "/images/민초.JPG"
              onClick= {() => {console.log('민초단!!');}}
            >
            </CardMedia>
          </CardActionArea>
        </Card> 
      </Grid>
      <Grid >
        <Card sx={{ maxWidth: 100 }}>
          <CardMedia
            component="img"
            height = "50"
            image ="/images/vs.png"
          >
          </CardMedia>
        </Card>
      </Grid>
      <Grid>
        <Card sx={{ maxWidth: 100 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height = "100"
            image = "/images/반민초.JPG"
            onClick= {() => {console.log('반민초단!!');}}
          >
          </CardMedia>
        </CardActionArea>
        </Card>
      </Grid>
      
    </Grid>
  );
}