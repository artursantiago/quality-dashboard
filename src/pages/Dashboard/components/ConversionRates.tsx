import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import {
  Box, CardContent, CardHeader, makeStyles,
} from '@material-ui/core';

import { useChartOptions } from 'hooks';
import { Card } from 'components';
import { formatDecimal } from 'utils/formatNumber';

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];
const CHART_HEIGHT = 300;

// ----------------------------------------------------------------------

const useStyles = makeStyles(({
  cardContainer: {
    height: '100%',
  },
}));

export const ConversionRates = (): JSX.Element => {
  const classes = useStyles();
  const basicChartOptions = useChartOptions();

  const conversionRatesChartOptions: ApexCharts.ApexOptions = merge(basicChartOptions, {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: formatDecimal,
        title: {
          formatter: (seriesName: string) => `#${seriesName}`,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        barHeight: '30%',
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Italy',
        'Japan',
        'China',
        'Canada',
        'France',
        'Germany',
        'South Korea',
        'Netherlands',
        'United States',
        'United Kingdom',
      ],
    },
  });

  return (
    <Card className={classes.cardContainer}>
      <CardHeader
        title="Conversion Rates"
        subheader="(+43%) than last year"
      />
      <CardContent>
        <Box>
          <ReactApexChart
            type="bar"
            series={CHART_DATA}
            options={conversionRatesChartOptions}
            height={CHART_HEIGHT}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
