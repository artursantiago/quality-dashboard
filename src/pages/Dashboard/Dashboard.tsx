import { Grid, makeStyles, Typography } from '@material-ui/core';
import { MetricCards } from './components/MetricCards';

const useStyles = makeStyles((theme) => ({
  welcomeMessage: {
    fontWeight: 500,
    marginBottom: theme.spacing(4),
  },
}));

export const Dashboard = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="flex-start"
      direction="column"
    >
      <Typography
        variant="h5"
        component="p"
        className={classes.welcomeMessage}
      >
        Hi, Welcome back!
      </Typography>

      <MetricCards />
    </Grid>
  );
};
