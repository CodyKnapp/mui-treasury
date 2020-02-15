import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
// import all components so that other styles is created after
import * as core from '@material-ui/core';
// -----------------------------------------------------------
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import typography from 'utils/typography';
import { ThemeWrapper } from 'utils/theme';

import '../website/src/global.css';
import './global.css';

addParameters({
  // hierarchySeparator: /\//,
  // hierarchyRootSeparator: /\|/,
  name: 'Mui Treasury',
  url: 'https://github.com/siriwatknp/mui-treasury',
});

typography.injectStyles();

const ThemeDecorator = storyFn => (
  <>
    <ThemeWrapper>{storyFn()}</ThemeWrapper>
  </>
);

// automatically import all files ending in *.stories.js
const websiteReq = require.context('../website/src', true, /.stories.js$/);
const muiComponentsReq = require.context('../packages/mui-components/src', true, /.stories.js$/);
function loadStories() {
  addDecorator(withKnobs);
  addDecorator(ThemeDecorator);
  websiteReq.keys().forEach(filename => websiteReq(filename));
  muiComponentsReq.keys().forEach(filename => muiComponentsReq(filename));
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
configure(loadStories, module);
