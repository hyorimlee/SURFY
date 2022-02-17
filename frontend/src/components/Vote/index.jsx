import React, { useEffect } from 'react';
import QRCode from "react-qr-code";
import { PieChart } from '@toast-ui/react-chart';

import { CustomGrid } from './styles';
import '@toast-ui/chart/dist/toastui-chart.min.css';


const VoteResult = (props) => {
  const { voteData } = props;
  const options = {
    theme: {
      chart: {
        backgroundColor: '#00ff0000'
      },
      series: {
        hover: {
          lineWidth: 0
        },
        dataLabels: {
          callout: {
            lineWidth: 3,
          },
          pieSeriesName: {
            useSeriesColor: false,
            fontSize: 25,
            color: '#ffffff',
          }
        },
      }
    },
    series: {
      dataLabels: {
        visible: true,
        anchor: 'outer',
        pieSeriesName: {
          visible: true,
          anchor: 'center'
        }
      }
    },
    chart: {
      width: 200,
      height: 200,
    },

    exportMenu: {
      visible: false
    },
    legend: {
      visible: false
    },
  };

  return (
    <>
      <PieChart data={voteData} options={options} />
    </>
  );
}

const Vote = (props) => {
  const { voteData, onTime, surveyId } = props;
  
  const webUrl = `http://i6a204.p.ssafy.io/web/roulette/${surveyId}`;
  const qrcodeSize = 75;

  
  useEffect(() => {
    const back = setTimeout(onTime, 7000);

    return () => {
      clearTimeout(back);
    }
  }, [onTime])

  return (
    <CustomGrid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <VoteResult voteData={voteData}></VoteResult>
      <QRCode size={qrcodeSize} value={webUrl}></QRCode>
    </CustomGrid>
  );
}

export default Vote;