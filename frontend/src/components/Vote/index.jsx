import React from 'react';
import { Grid } from '@material-ui/core';
import QRCode from "react-qr-code";
import { PieChart } from '@toast-ui/react-chart';

import Wrapper from './styles';
import '@toast-ui/chart/dist/toastui-chart.min.css';


const VoteResult = (props) => {
  const { voteData } = props;
  const options = {
    theme: {
      chart: {
        backgroundColor: '#00ff0000'
      },
      series: {
        dataLabels: {
          callout: {
            lineWidth: 5,
          },
          pieSeriesName: {
            useSeriesColor: false,
            fontSize: 30,
            color: '#ff4433',
          }
        },
      }
    },
    series: {
      dataLabels: {
        visible: true,
        pieSeriesName: {
          visible: true,
          anchor: 'outer'
        }
      }
    },
    chart: {
      width: 500,
      height: 500,
    },
    exportMenu: {
      visible: false
    },
    legend: {
      visible: false,
    },
  };

  return (
    <>
      <PieChart data={voteData} options={options} />
    </>
  );
}

const Vote = (props) => {
  const { surveyTitle, voted, voteData } = props;
  
  const webUrl = `http://localhost:3000/web?title=${surveyTitle}`;
  const qrcodeSize = 125;

  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <VoteResult voteData={voteData}></VoteResult>
        <QRCode size={qrcodeSize} value={webUrl}></QRCode>
      </Grid>
    </Wrapper>
  );
}

export default Vote;