import faker from 'faker';

import {
  CardHeader,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import {
  Timeline,
} from '@material-ui/lab';

import { Card } from 'components';
import { OrderTimelineItem } from './OrderTimelineItem';

// ----------------------------------------------------------------------

const TIMELINES: OrderTimelineItem.Timeline[] = [
  {
    id: faker.datatype.uuid(),
    title: '1983, orders, $4220',
    time: faker.date.past(),
    type: 'order1',
  },
  {
    id: faker.datatype.uuid(),
    title: '12 Invoices have been paid',
    time: faker.date.past(),
    type: 'order2',
  },
  {
    id: faker.datatype.uuid(),
    title: 'Order #37745 from September',
    time: faker.date.past(),
    type: 'order3',
  },
  {
    id: faker.datatype.uuid(),
    title: 'New order placed #XF-2356',
    time: faker.date.past(),
    type: 'order4',
  },
  {
    id: faker.datatype.uuid(),
    title: 'New order placed #XF-2346',
    time: faker.date.past(),
    type: 'order5',
  },
];

// ----------------------------------------------------------------------

const useStyles = makeStyles(({
  cardContainer: {
    height: '100%',
  },
  timeline: {
    margin: 0,
    '& .MuiTimelineItem-missingOppositeContent:before': {
      display: 'none',
    },
  },
}));

export const OrderTimeline = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardHeader title="Order Timeline" />
      <CardContent>
        <Timeline className={classes.timeline}>
          {TIMELINES.map((timeline, index) => (
            <OrderTimelineItem
              key={timeline.id}
              timeline={timeline}
              isLast={index === TIMELINES.length - 1}
            />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};
