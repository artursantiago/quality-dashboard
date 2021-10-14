import {
  alpha, darken,
  Box, Card, makeStyles, Theme, Typography,
} from '@material-ui/core';

const useStyles = (cardColor: string) => (makeStyles((theme: Theme) => ({
  cardContainer: {
    paddingBlock: theme.spacing(4),
    minHeight: theme.spacing(18),
    minWidth: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: cardColor,
    border: 0,
    borderRadius: 24,
  },
  iconContainer: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${alpha(cardColor, 0)} 0%, ${alpha(darken(cardColor, 1), 0.24)} 100%)`,
    color: darken(cardColor, 0.7),
  },
  labelPrimary: {
    marginTop: theme.spacing(2),
    color: darken(cardColor, 0.7),
    fontWeight: 700,
    fontSize: '1.5rem',
  },
  labelSecondary: {
    color: darken(cardColor, 0.4),
    fontWeight: 700,
    fontSize: '0.8rem',
  },
})))();

export const InfoCard = ({
  icon: Icon, color, labelPrimary, labelSecondary,
}: InfoCard.Props): JSX.Element => {
  const classes = useStyles(color);

  return (
    <Card
      variant="outlined"
      className={classes.cardContainer}
    >
      <Box className={classes.iconContainer}>
        <Icon />
      </Box>

      <Typography className={classes.labelPrimary}>
        {labelPrimary}
      </Typography>

      {labelSecondary && (
      <Typography className={classes.labelSecondary}>
        {labelSecondary}
      </Typography>
      )}
    </Card>
  );
};
