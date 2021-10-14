import { useEffect } from 'react';
import {
  Drawer, IconButton, Link, List, Theme, useMediaQuery, useTheme,
} from '@material-ui/core';
import {
  Assessment, PeopleAlt, Storefront, Description, NewReleases, ChevronLeft, Menu,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import { MenuItem } from 'components';

import { logo, logoSmall } from 'assets/icons';
import clsx from 'clsx';

export const useStyles = makeStyles((theme: Theme) => ({
  navigationToolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    ...theme.mixins.toolbar,
  },
  navigationToolbarCollapse: {
    justifyContent: 'center',
    paddingRight: 0,
  },
  navigationDrawer: {
    width: 280,
    transition: 'width 0.2s ease',
  },
  navigationDrawerCollapse: {
    width: theme.spacing(9),
  },
  navigationLogoContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  navigationLogo: {
    height: 40,
  },
}));

type Props = {
  open: boolean
  isCollapsed: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navigation = ({
  open, setOpen, isCollapsed, setIsCollapsed,
}: Props): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSmallSize = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (matchesSmallSize) {
      setOpen(false);
      setIsCollapsed(false);
    }
  }, [matchesSmallSize, setIsCollapsed, setOpen]);

  function toggleNavigation() {
    if (matchesSmallSize) {
      setOpen((prevState) => !prevState);
    } else {
      setIsCollapsed((prevState) => !prevState);
    }
  }

  return (
    <div>
      <Drawer
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            isCollapsed && classes.navigationDrawerCollapse,
          ),
        }}
        variant={matchesSmallSize ? 'temporary' : 'permanent'}
        open={open}
        onClose={toggleNavigation}
      >
        <div
          className={clsx(
            classes.navigationToolbar,
            isCollapsed && classes.navigationToolbarCollapse,
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {!isCollapsed ? <ChevronLeft /> : <Menu />}
          </IconButton>
        </div>

        <div className={classes.navigationLogoContainer}>
          <Link href="/">
            <img className={classes.navigationLogo} src={!isCollapsed ? logo : logoSmall} alt="Quality Logo" />
          </Link>
        </div>

        <List component="nav">
          <MenuItem small={isCollapsed} icon={Assessment} path="/dashboard" primaryText="Dashboard" />
          <MenuItem small={isCollapsed} icon={PeopleAlt} path="/user" primaryText="User" />
          <MenuItem small={isCollapsed} icon={Storefront} path="/product" primaryText="Product" />
          <MenuItem small={isCollapsed} icon={Description} path="/blog" primaryText="Blog" />
          <MenuItem small={isCollapsed} icon={NewReleases} path="/" primaryText="Lorem Ipsum" />
          <MenuItem small={isCollapsed} icon={NewReleases} path="/" primaryText="Lorem Ipsum" />
          <MenuItem small={isCollapsed} icon={NewReleases} path="/" primaryText="Lorem Ipsum" />
        </List>
      </Drawer>
    </div>
  );
};
