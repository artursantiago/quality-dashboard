import React from 'react';
import {
  Typography,
  useTheme,
} from '@material-ui/core';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';

import { formatDateTime } from 'utils/formatDate';

export const OrderTimelineItem = ({
  timeline,
  isLast,
}: OrderTimelineItem.Props): JSX.Element => {
  const theme = useTheme();

  const { title, time, type } = timeline;

  const dotBgColor = (type === 'order1' && theme.palette.primary.main)
  || (type === 'order2' && theme.palette.success.main)
  || (type === 'order3' && theme.palette.info.main)
  || (type === 'order4' && theme.palette.warning.main)
  || theme.palette.error.main;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot style={{ backgroundColor: dotBgColor }} />
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">
          {title}
        </Typography>
        <Typography variant="caption">
          {formatDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
