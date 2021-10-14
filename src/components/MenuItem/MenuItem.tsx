import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: 44,
  },
  menuItemActive: {
    backgroundColor: '#EBEBEC',
  },
  icon: {
    justifyContent: 'center',
  },
  iconActive: {
    color: '#6EC177',
  },
  primaryText: {
    whiteSpace: 'nowrap',
  },
  primaryTextActive: {
    color: '#6EC177',
    fontWeight: 500,
  },
});

type Props = {
  icon: SvgIconComponent
  small?: boolean
  path: string
  primaryText: string
  onClick?: () => void
}

export const MenuItem = ({
  icon: Icon,
  small,
  path,
  primaryText,
  onClick,
}: Props): JSX.Element => {
  const classes = useStyles();
  const isActive = path === '/dashboard';

  function handleOnClick() {
    onClick?.();
  }

  return (
    <ListItem
      button
      className={clsx(classes.menuItem, isActive && classes.menuItemActive)}
      onClick={handleOnClick}
    >
      <ListItemIcon className={clsx(classes.icon, isActive && classes.iconActive)}>
        <Icon />
      </ListItemIcon>
      {/* {!small && ( */}
      <ListItemText
        primary={!small && primaryText}
        primaryTypographyProps={{ variant: 'body2', className: clsx(classes.primaryText, isActive && classes.primaryTextActive) }}
      />
      {/* )} */}
    </ListItem>
  );
};
