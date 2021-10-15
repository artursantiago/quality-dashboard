import {
  Avatar,
  Badge,
  Grid, IconButton, Theme, useMediaQuery, useTheme,
} from '@material-ui/core';
import {
  Search, Notifications, Menu,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import { usaFlag } from 'assets/flags';
import { avatar } from 'assets/icons';

const useStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    zIndex: 1,
    position: 'fixed',
    width: 'calc(100% - 280px)',
    right: 0,
    top: 0,
    paddingBlock: theme.spacing(3),
    paddingInline: theme.spacing(5),
    transition: 'width 0.2s ease',
    backdropFilter: 'blur(6px)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  headerComponentExtended: {
    width: `calc(100% - ${theme.spacing(9)}px)`,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  iconButtonContent: {
    maxWidth: 32,
    maxHeight: 32,
  },
}));

export const Header = ({
  setIsNavigationOpen, isNavigationCollapsed,
}: Header.Props): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSmallSize = useMediaQuery(theme.breakpoints.down('sm'));

  function handleMenuIconClick() {
    setIsNavigationOpen(true);
  }

  return (
    <Grid
      component="header"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
      className={clsx(classes.headerContainer,
        (isNavigationCollapsed || matchesSmallSize) && classes.headerComponentExtended)}
    >
      <Grid item>
        {matchesSmallSize && (
          <IconButton onClick={handleMenuIconClick}>
            <Menu />
          </IconButton>
        )}
        <IconButton>
          <Search />
        </IconButton>
      </Grid>

      <Grid item>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton>
              <Avatar className={classes.iconButtonContent} src={usaFlag} alt="Flag Icon" />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <Notifications className={classes.iconButtonContent} color="action" />
              </Badge>
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton>
              <Avatar src={avatar} className={classes.iconButtonContent} alt="Avatar Icon" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
