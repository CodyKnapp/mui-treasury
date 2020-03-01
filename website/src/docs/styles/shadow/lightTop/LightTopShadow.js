import React from 'react';
import Box from '@material-ui/core/Box';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const LightTopShadow = () => {
  const styles = useLightTopShadowStyles({
    // inactive: true, // add this line to disable hover effect
  });
  return <Box width={'80%'} borderRadius={2} height={160} classes={styles} />;
};

// hide-start
LightTopShadow.metadata = {
  title: 'Light Top',
  path: 'styles/shadow/lightTop',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'shadow/lightTop/lightTopShadow.styles.js' },
  ],
};
// hide-end

export default LightTopShadow;
