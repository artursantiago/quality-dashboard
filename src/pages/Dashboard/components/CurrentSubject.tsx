import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import {
  Box, CardContent, CardHeader, makeStyles,
} from '@material-ui/core';

import { Card } from 'components';
import { useChartOptions } from 'hooks';

// ----------------------------------------------------------------------

const CHART_DATA = [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20],
}, {
  name: 'Series 2',
  data: [20, 30, 40, 80, 20, 80],
}, {
  name: 'Series 3',
  data: [44, 76, 78, 13, 43, 10],
}];
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

export const CurrentSubject = (): JSX.Element => {
  const classes = useStyles();
  const basicChartOptions = useChartOptions();

  const currentSubjectChartOptions: ApexCharts.ApexOptions = merge(basicChartOptions, {
    legend: { floating: true, horizontalAlign: 'center' },
    stroke: {
      width: 1.5,
    },
    fill: {
      opacity: 0.5,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: [
        'Italy',
        'Japan',
        'China',
        'Canada',
        'France',
        'Germany',
      ],
    },
  });

  return (
    <Card className={classes.cardContainer}>
      <CardHeader
        title="Current Subject"
      />
      <CardContent>
        <Box className={classes.chartContainer}>
          <ReactApexChart
            type="radar"
            series={CHART_DATA}
            options={currentSubjectChartOptions}
            height={CHART_HEIGHT}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
