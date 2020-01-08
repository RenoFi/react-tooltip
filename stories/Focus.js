import React from 'react';
import '../src/styles.css';
import Tooltip from '../src';

export default {
  title: 'Focus',
};

const content = 'Hello, World!';

export const Bottom = () => (
  <Tooltip bottom trigger="focus" content={content}>
    <input type="text" placeholder="focus me" />
  </Tooltip>
);

export const Left = () => (
  <Tooltip left trigger="focus" content={content}>
    <input type="text" placeholder="focus me" />
  </Tooltip>
);

export const Right = () => (
  <Tooltip right trigger="focus" content={content}>
    <input type="text" placeholder="focus me" />
  </Tooltip>
);

export const Top = () => (
  <Tooltip top trigger="focus" content={content}>
    <input type="text" placeholder="focus me" />
  </Tooltip>
);
