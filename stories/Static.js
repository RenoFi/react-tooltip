import React from 'react';
import '../src/styles.css';
import Tooltip from '../src';

export default {
  title: 'Static',
};

const content = 'Hello, World!';

export const Bottom = () => <Tooltip bottom content={content} />;

export const Left = () => <Tooltip left content={content} />;

export const Right = () => <Tooltip right content={content} />;

export const Top = () => <Tooltip top content={content} />;
