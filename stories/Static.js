import React from 'react';
import '../src/styles.css';
import Tooltip from '../src';

export default {
  title: 'Static',
};

const content = 'Hello, World!';

export const Bottom = () => (
  <Tooltip bottom visible content={content} />
);

export const Left = () => (
  <Tooltip left visible content={content} />
);

export const Right = () => (
  <Tooltip right visible content={content} />
);

export const Top = () => (
  <Tooltip top visible content={content} />
);
