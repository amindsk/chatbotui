import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import PieChart from "highcharts-react-official";
import { useTheme } from '@mui/material';

// import histogram from "highcharts/modules/histogram-bellcurve";
// import { ResponsiveContainer } from "recharts";
// histogram(Highcharts);

const Pie = ({ label, val }) => {
  const [sum, setsum] = React.useState([]);
  const theme = useTheme();
  const [chartOptions, setChartOptions] = useState({
    chart: {
      // plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      height: "250px",
      backgroundColor: null,
    },
    title: {
      text: null,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    colors: [
      theme.palette.secondary.main,
      theme.palette.primary.main,
    ],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [],
      },
    ],
  });

  React.useEffect(() => {
    let ss = val.reduce((a, b) => a + b, 0);
    setsum(ss);
    let x = [];
    label.forEach((element, index) => {
      let y = {};
      y["name"] = element === null ? "null" : element;
      y["y"] = parseFloat(val[index]);
      x.push(y);
    });
    setChartOptions({
      ...chartOptions,
      series: { ...chartOptions.series[0], data: x },
    });
  }, []);

  return (
      <PieChart highcharts={Highcharts} options={chartOptions} />
  );
};

export default Pie;