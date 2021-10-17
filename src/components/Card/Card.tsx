import { makeStyles, Card as CardMui, CardProps } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(({
  cardContainer: {
    boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px',
  },
}));

export const Card = ({ children, className, ...props }: CardProps):JSX.Element => {
  const classes = useStyles();

  return (
    <CardMui className={clsx(classes.cardContainer, className)} {...props}>
      {children}
    </CardMui>
  );
};
