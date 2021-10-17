import faker from 'faker';
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

import { Card } from 'components';
import { mockImgCover } from 'utils/mockImgCover';
import { NewsItem } from './NewsItem';

// ----------------------------------------------------------------------

const NEWS = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  title: faker.name.title(),
  description: faker.lorem.paragraphs(),
  image: mockImgCover(index),
  postedAt: faker.date.soon(),
}));

// ----------------------------------------------------------------------

export const NewsUpdate = ():JSX.Element => (
  <Card>
    <CardHeader title="News Update" />
    <CardContent>
      <Grid container spacing={2}>
        {NEWS.map((news) => <NewsItem key={news.id} news={news} />)}
      </Grid>
    </CardContent>
    <Divider />
    <CardActions>
      <Box sx={{ ml: 'auto', p: 1 }}>
        <Button
          size="small"
          endIcon={<ChevronRight />}
        // component={RouterLink}
        >
          View All
        </Button>
      </Box>
    </CardActions>
  </Card>
);
