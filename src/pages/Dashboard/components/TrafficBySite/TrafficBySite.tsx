import faker from 'faker';
import { CardContent, CardHeader, Grid } from '@material-ui/core';
import {
  Facebook, LinkedIn, Twitter, Instagram,
} from '@material-ui/icons';

import { Card } from 'components';
import { SiteItem } from './SiteItem';

// ----------------------------------------------------------------------

const SOCIALS: SiteItem.Site[] = [
  {
    id: faker.datatype.uuid(),
    name: 'Facebook',
    value: faker.datatype.number(),
    icon: Facebook,
    color: '#1877F2',
  },
  {
    id: faker.datatype.uuid(),
    name: 'Instagram',
    value: faker.datatype.number(),
    icon: Instagram,
    color: '#E90021',
  },
  {
    id: faker.datatype.uuid(),
    name: 'Linkedin',
    value: faker.datatype.number(),
    icon: LinkedIn,
    color: '#006097',
  },
  {
    id: faker.datatype.uuid(),
    name: 'Twitter',
    value: faker.datatype.number(),
    icon: Twitter,
    color: '#1C9CEA',
  },
];

// ----------------------------------------------------------------------

export const TrafficBySite = (): JSX.Element => (
  <Card>
    <CardHeader title="Traffic by Site" />
    <CardContent>
      <Grid container spacing={2}>
        {SOCIALS.map((site) => <SiteItem key={site.id} site={site} />)}
      </Grid>
    </CardContent>
  </Card>
);
