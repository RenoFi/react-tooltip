import React from 'react';
import {configure, addDecorator} from '@storybook/react';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: 200,
};

addDecorator(storyFn => <div style={style}>{storyFn()}</div>);

configure(require.context('../stories', true), module);
