import React from 'react';
import { Grid, CardMedia, Card } from '@material-ui/core';


export default function CardComponent(props) {
  const { onVote, surveyContent, image } = props;

  const vsStyle = {
    fontSize: "34px",
    alignItems: "center",
    backgroundColor: "#303841",
    color: "white",
  }

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
          height = "130"
          image = {image[0] || "/images/민초.JPG"}
          name={surveyContent[0]}
          onClick={onVote}
        >
        </CardMedia>
      </Card> 
      <Card>
        <p style={vsStyle}>vs</p>
      </Card>
      <Card>
        <CardMedia
          component="img"
          height = "130"
          image = {image[1] || "/images/반민초.JPG"}
          name={surveyContent[1]}
          onClick={onVote}
        >
        </CardMedia>
      </Card>
    </Grid>
  );
}