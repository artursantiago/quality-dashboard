import { Grid, makeStyles, Typography } from '@material-ui/core';
import {
  Android, Apple, BugReport, LaptopWindows,
} from '@material-ui/icons';
import { InfoCard } from 'components';

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

      <Grid
        container
        wrap="wrap"
        spacing={6}
      >
        <Grid item xs>
          <InfoCard
            icon={Android}
            color="#C8FACD"
            labelPrimary="724k"
            labelSecondary="Weekly Sales"
          />
        </Grid>
        <Grid item xs>
          <InfoCard
            icon={Apple}
            color="#D0F2FF"
            labelPrimary="724k"
            labelSecondary="Weekly Sales"
          />
        </Grid>
        <Grid item xs>
          <InfoCard
            icon={LaptopWindows}
            color="#FFF7CD"
            labelPrimary="724k"
            labelSecondary="Weekly Sales"
          />
        </Grid>
        <Grid item xs>
          <InfoCard
            icon={BugReport}
            color="#FFE7D9"
            labelPrimary="724k"
            labelSecondary="Weekly Sales"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
