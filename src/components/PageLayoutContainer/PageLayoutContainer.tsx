import {
  Grid, Theme, useMediaQuery, useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  rootContainer: {
    position: 'fixed',
    right: 0,
    top: 0,
    width: 'calc(100% - 280px)',
    paddingTop: `calc(104px + ${theme.spacing(2)}px)`, // Header space + real padding
    paddingBottom: theme.spacing(2),
    paddingInline: theme.spacing(7),
    transition: 'width 0.2s ease',
    minHeight: '100vh',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  rootContainerExtended: {
    width: `calc(100% - ${theme.spacing(9)}px)`,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  contentContainer: {
    maxWidth: theme.breakpoints.values.xl,
    margin: '0 auto',
    height: '100%',
  },
}));

export const PageLayoutContainer = ({
  isNavigationCollapsed,
  children,
}: PageLayoutContainer.Props): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSmallSize = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      className={clsx(classes.rootContainer,
        (matchesSmallSize || isNavigationCollapsed) && classes.rootContainerExtended)}
    >
      <Grid container className={classes.contentContainer}>
        {children}
      </Grid>
    </Grid>
  );
};
