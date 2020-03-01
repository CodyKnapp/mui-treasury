import React from 'react';
import Box from '@material-ui/core/Box';
import PeopleCardFooter from '@mui-treasury/components/cardFooter/people';

const faces = [
  'https://i.pravatar.cc/300?img=1',
  'https://i.pravatar.cc/300?img=2',
  'https://i.pravatar.cc/300?img=3',
  'https://i.pravatar.cc/300?img=4',
];

const PeopleCardFooterDemo = () => (
  <Box minWidth={256}>
    <PeopleCardFooter faces={faces} />
  </Box>
);

// hide-start
PeopleCardFooterDemo.metadata = {
  title: 'People',
  path: 'component/cardFooter/people', // must match its index.md
  creators: [require('constants/creators').siriwatknp],
  files: [
    {
      pkg: 'mui-components',
      path: 'cardFooter/people/PeopleCardFooter.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardFooter/people/peopleCardFooter.styles.js',
    },
  ],
};
// hide-end

export default PeopleCardFooterDemo;
