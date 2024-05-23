import { Card, CardContent, CardHeader, Stack, TextField, Typography, useTheme } from '@mui/material'
import { blue, green, grey, red } from '@mui/material/colors'
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official"
import { Fragment } from 'react'

const DonutChart = ({ seriesName, showDataLabels = false, data }) => {
    const theme = useTheme();
    const options = {
        chart: {
            plotBackgroundColor: theme.palette.background.paper,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            margin: 0,
            height: 200,
            width: 200,
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: showDataLabels,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                innerSize: '70%',
                showInLegend: false
            }
        },
        series: [
            {
                name: seriesName,
                colorByPoint: true,
                data: data.filter(d => d.y > 0)
            }
        ]
    }
    return (

        <HighchartsReact
            highcharts={Highcharts}
            options={options}>
        </HighchartsReact>

    )
}

export default DonutChart