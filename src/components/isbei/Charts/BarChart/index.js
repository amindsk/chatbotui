import React, { useEffect, useState } from "react";
import { useTheme } from '@mui/material';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import histogram from "highcharts/modules/histogram-bellcurve";
// import { ResponsiveContainer } from "recharts";
histogram(Highcharts);

const BarChart = ({
  yaxis,
  xaxis,
  hiddenlegents,
  title,
  xaxislabel,
  yaxislabel,
}) => {
  const theme = useTheme();
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "column",
      height: (10 / 16) * 100 + "%",
      backgroundColor: null,
    },
    title: {
      text: hiddenlegents ? "" : `Analysis`,
    },
    xAxis: {
      categories: xaxis,
      crosshair: true,
    },
    colors: [
      theme.palette.secondary.main,
      theme.palette.primary.main,
    ],
    plotOptions: {
      column: {
        colorByPoint: true,
      },
    },

    yAxis: {
      gridLineColor: '#333',
      title: {
        useHTML: true,
        text: hiddenlegents ? "" : yaxislabel,
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        showInLegend: false,
        name: title,
        data: yaxis,
      },
    ],
  });

  return (
    // <ResponsiveContainer aspect={2.0 / 0.5} width="100%" >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    // </ResponsiveContainer>
  );
};

export default BarChart;