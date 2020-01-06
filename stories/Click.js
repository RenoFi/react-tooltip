import React from 'react';
import '../src/styles.css';
import Tooltip from '../src';

export default {
  title: 'Click',
};

const content = 'Hello, World!';

export const Bottom = () => (
  <Tooltip bottom trigger="click" content={content}>
    <button>click me</button>
  </Tooltip>
);

export const Left = () => (
  <Tooltip left trigger="click" content={content}>
    <button>click me</button>
  </Tooltip>
);

export const Right = () => (
  <Tooltip right trigger="click" content={content}>
    <button>click me</button>
  </Tooltip>
);

export const Top = () => (
  <Tooltip top trigger="click" content={content}>
    <button>click me</button>
  </Tooltip>
);
