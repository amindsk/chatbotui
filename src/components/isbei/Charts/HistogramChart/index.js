import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useTheme } from '@mui/material';

import histogram from "highcharts/modules/histogram-bellcurve";
// import { ResponsiveContainer } from "recharts";
histogram(Highcharts);

const HistogramChart = ({
  yaxis,
  xaxis,
  hiddenlegents,
  title,
  xaxislabel,
  yaxislabel,
}) => {
  const theme = useTheme();
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: hiddenlegents ? "" : `${title} Analysis`,
    },

    chart: {
      height: (8 / 16) * 100 + "%", // 16:9 ratio
      backgroundColor: null,
    },

    tooltip: {
      headerFormat:
        '<span style="font-size:10px">{point.key} - {point.key + 1}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },

    legend: {
      align: "right",
      verticalAlign: "top",
      x: 0,
      y: 100,
    },

    colors: [
      theme.palette.secondary.main,
      theme.palette.primary.main,
    ],

    xAxis: [
      {
        minTickInterval: 0,
        title: {
          text: hiddenlegents ? "" : xaxislabel,
        },
        labels: {
          rotation: -35,
        },
        categories: xaxis,
        endOnTick: true,
        showLastLabel: true,
        startOnTick: true,
      },
    ],

    yAxis: [
      {
        min: 0,
        gridLineColor: '#333',
        title: {
          text: hiddenlegents ? "" : yaxislabel,
        },
        categories: yaxis,
      },
    ],

    series: [
      {
        showInLegend: false,
        name: hiddenlegents ? "" : title,
        type: "histogram",
        yAxis: 0,
        xAxis: 0,
        baseSeries: "s1",
        zIndex: -1,
        data: yaxis,
        accessibility: {
          exposeAsGroupOnly: true,
        },
      },
    ],
  });

  return (
    // <ResponsiveContainer aspect={2.0 / 1.0} width="100%">
    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    // </ResponsiveContainer>
  );
};

export default HistogramChart;