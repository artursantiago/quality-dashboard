import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import {
  Box, CardContent, CardHeader, makeStyles, useTheme,
} from '@material-ui/core';

import { useChartOptions } from 'hooks';
import { Card } from 'components';
import { formatDecimal } from 'utils/formatNumber';

// ----------------------------------------------------------------------

const CHART_DATA = [4344, 5435, 1443, 4443];
const CHART_HEIGHT_CONTAINER = 330;
const CHART_HEIGHT = 280;
const LEGEND_HEIGHT = 72;

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    height: '100%',
  },
  chartContainer: {
    height: CHART_HEIGHT_CONTAINER,
    '& .apexcharts-canvas svg': {
      background: 'red',
      height: CHART_HEIGHT_CONTAINER,
    },
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
      overflow: 'visible',
    },
    '& .apexcharts-legend': {
      height: LEGEND_HEIGHT,
      alignContent: 'center',
      position: 'relative !important',
      borderTop: `solid 1px ${theme.palette.divider}`,
      top: `calc(${CHART_HEIGHT_CONTAINER - LEGEND_HEIGHT}px) !important`,
    },
  },
}));

export const CurrentVisits = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const basicChartOptions = useChartOptions();

  const currentVisitsChartOptions: ApexCharts.ApexOptions = merge(basicChartOptions, {
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main,
    ],
    labels: ['America', 'Asia', 'Europe', 'Africa'],
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
    legend: { floating: true, horizontalAlign: 'center' },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: formatDecimal,
        title: {
          formatter: (seriesName: string) => `#${seriesName}`,
        },
      },
    },
  });

  return (
    <Card className={classes.cardContainer}>
      <CardHeader title="Current Visits" />
      <CardContent>
        <Box className={classes.chartContainer}>
          <ReactApexChart
            type="pie"
            series={CHART_DATA}
            options={currentVisitsChartOptions}
            height={CHART_HEIGHT}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
