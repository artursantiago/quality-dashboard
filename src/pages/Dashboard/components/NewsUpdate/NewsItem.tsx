import { formatDistance } from 'date-fns';
import {
  Grid, makeStyles, Typography,
} from '@material-ui/core';

const useStyles = makeStyles(({
  image: {
    width: 48,
    height: 48,
    borderRadius: 12,
    objectFit: 'cover',
  },
  textContainer: {
    overflow: 'hidden',
  },
  postedAtContainer: {
    whiteSpace: 'nowrap',
  },
}));

export const NewsItem = ({ news }: NewsItem.Props): JSX.Element => {
  const classes = useStyles();
  const {
    title, image, description, postedAt,
  } = news;

  return (
    <Grid
      item
      container
      wrap="nowrap"
      spacing={2}
    >
      <Grid
        item
        xs
        container
        alignItems="center"
      >
        <img className={classes.image} src={image} alt={title} />
      </Grid>

      <Grid
        item
        lg={9}
        container
        alignItems="center"
        className={classes.textContainer}
      >
        <Typography variant="subtitle2" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" noWrap>
          {description}
        </Typography>
      </Grid>

      <Grid
        item
        xs
        container
        alignItems="center"
        justifyContent="flex-end"
      >
        <Typography
          variant="caption"
          className={classes.postedAtContainer}
        >
          {formatDistance(postedAt, new Date())}
        </Typography>
      </Grid>
    </Grid>
  );
};
