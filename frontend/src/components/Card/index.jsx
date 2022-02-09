import React from 'react';
import { Grid, CardMedia, Card } from '@material-ui/core';


export default function CardComponent(props) {
<<<<<<< HEAD
  const { onVote, surveyContent } = props;
=======
  const { onVote, surveyContent, image } = props;
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562

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
<<<<<<< HEAD
          image = "/images/민초.JPG"
=======
          image = {image[0] || "/images/민초.JPG"}
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
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
<<<<<<< HEAD
          image = "/images/반민초.JPG"
=======
          image = {image[1] || "/images/반민초.JPG"}
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
          name={surveyContent[1]}
          onClick={onVote}
        >
        </CardMedia>
      </Card>
    </Grid>
  );
}