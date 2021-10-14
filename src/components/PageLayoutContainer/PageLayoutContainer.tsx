import {
  Grid, Theme, useMediaQuery, useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  rootContainer: {
    position: 'fixed',
    width: 'calc(100% - 280px)',
    right: 0,
    top: 104,
    padding: theme.spacing(3),
    transition: 'width 0.2s ease',
  },
  rootContainerExtended: {
    width: `calc(100% - ${theme.spacing(9)}px)`,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
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
      {children}
    </Grid>
  );
};
