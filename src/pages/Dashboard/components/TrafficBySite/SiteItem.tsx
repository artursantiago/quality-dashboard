import {
  Box, Grid, makeStyles, Paper, Typography,
} from '@material-ui/core';
import { formatShortNumber } from 'utils/formatNumber';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
  },
  icon: {
    height: 32,
    width: 32,
  },
}));

export const SiteItem = ({ site }: SiteItem.Props): JSX.Element => {
  const classes = useStyles();

  const {
    icon: Icon, value, name, color,
  } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" className={classes.paper}>
        <Box mb={1}>
          <Icon className={classes.icon} htmlColor={color} />
        </Box>
        <Typography variant="h6">
          {formatShortNumber(value)}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
};
