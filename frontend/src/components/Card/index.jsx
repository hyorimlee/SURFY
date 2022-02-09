import React from 'react';
import { Grid, CardMedia, Card } from '@material-ui/core';


export default function CardComponent(props) {
  const { onVote, surveyContent, image } = props;

  const vsStyle = {
    fontSize: "150px",
    // justifyContent: "center",
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
          height = "250"
          image = {image[0] || "/images/민초.JPG"}
          name={surveyContent[0]}
          onClick={onVote}
        >
        </CardMedia>
      </Card> 
      <Card>
        {/* <CardMedia
          component="img"
          height = "50"
          image ="/images/vs.png"
        >
        </CardMedia> */}
        <p style={vsStyle}>vs</p>
      </Card>
      <Card>
        <CardMedia
          component="img"
          height = "250"
          image = {image[1] || "/images/반민초.JPG"}
          name={surveyContent[1]}
          onClick={onVote}
        >
        </CardMedia>
      </Card>
    </Grid>
  );
}