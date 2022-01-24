import React from 'react';
import { Grid, CardMedia, Card } from '@mui/material';

export default function CardComponent(props) {
  const { onVote, surveyContent } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Card>
        <CardMedia
          component="img"
          height = "150"
          image = "/images/민초.JPG"
          name={surveyContent[0]}
          onClick={onVote}
        >
        </CardMedia>
      </Card> 
      <Card>
        <CardMedia
          component="img"
          height = "50"
          image ="/images/vs.png"
        >
        </CardMedia>
      </Card>
      <Card>
        <CardMedia
          component="img"
          height = "150"
          image = "/images/반민초.JPG"
          name={surveyContent[1]}
          onClick={onVote}
        >
        </CardMedia>
      </Card>
    </Grid>
  );
}