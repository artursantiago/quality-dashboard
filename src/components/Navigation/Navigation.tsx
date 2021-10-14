import { useState } from 'react';
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

export const Navigation = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSmallSize = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(true);

  function toggleNavigation() {
    setOpen((prevState) => !prevState);
  }

  function closeNavigation() {
    if (matchesSmallSize) {
      setOpen(false);
    }
  }

  return (
    <div>
      <Drawer
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            !open && classes.navigationDrawerCollapse,
          ),
        }}
        variant={matchesSmallSize ? 'temporary' : 'permanent'}
      >
        <div
          className={clsx(
            classes.navigationToolbar,
            !open && classes.navigationToolbarCollapse,
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {open ? <ChevronLeft /> : <Menu />}
          </IconButton>
        </div>

        <div className={classes.navigationLogoContainer}>
          <Link href="/">
            <img className={classes.navigationLogo} src={open ? logo : logoSmall} alt="Quality Logo" />
          </Link>
        </div>

        <List component="nav">
          <MenuItem small={!open} onClick={closeNavigation} icon={Assessment} path="/dashboard" primaryText="Dashboard" />
          <MenuItem small={!open} onClick={closeNavigation} icon={PeopleAlt} path="/user" primaryText="User" />
          <MenuItem small={!open} onClick={closeNavigation} icon={Storefront} path="/product" primaryText="Product" />
          <MenuItem small={!open} onClick={closeNavigation} icon={Description} path="/blog" primaryText="Blog" />
          <MenuItem small={!open} onClick={closeNavigation} icon={NewReleases} path="/" primaryText="Lorem Ipsum" />
          <MenuItem small={!open} onClick={closeNavigation} icon={NewReleases} path="/" primaryText="Lorem Ipsum" />
          <MenuItem small={!open} onClick={closeNavigation} icon={NewReleases} path="/" primaryText="Lorem Ipsum" />
        </List>
      </Drawer>
    </div>
  );
};
