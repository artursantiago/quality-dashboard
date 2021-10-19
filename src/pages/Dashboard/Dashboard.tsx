import { Grid, makeStyles, Typography } from '@material-ui/core';
import { ConversionRates } from './components/ConversionRates';
import { CurrentSubject } from './components/CurrentSubject';
import { CurrentVisits } from './components/CurrentVisits';
import { MetricCards } from './components/MetricCards';
import { NewsUpdate } from './components/NewsUpdate/NewsUpdate';
import { OrderTimeline } from './components/OrderTimeline/OrderTimeline';
import { TrafficBySite } from './components/TrafficBySite/TrafficBySite';
import { WebsiteVisits } from './components/WebsiteVisits';

const useStyles = makeStyles(({
  welcomeMessage: {
    fontWeight: 500,
  },
}));

export const Dashboard = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      spacing={3}
    >
      <Grid item>
        <Typography
          variant="h5"
          component="p"
          className={classes.welcomeMessage}
        >
          Hi, Welcome back!
        </Typography>
      </Grid>

      <Grid item>
        <MetricCards />
      </Grid>

      <Grid item container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
          <WebsiteVisits />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CurrentVisits />
        </Grid>
      </Grid>

      <Grid item container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
          <ConversionRates />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CurrentSubject />
        </Grid>
      </Grid>

      <Grid item container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
          <NewsUpdate />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <OrderTimeline />
        </Grid>
      </Grid>

      <Grid item container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <TrafficBySite />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <OrderTimeline />
        </Grid>
      </Grid>
    </Grid>
  );
};
