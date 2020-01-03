import React from 'react';
import '../src/styles.css';
import Tooltip from '../src';

export default {
  title: 'Hover',
};

export const Bottom = () => (
  <Tooltip bottom trigger="hover" content="Tooltip!">
    <span>hover me</span>
  </Tooltip>
);

export const Left = () => (
  <Tooltip left trigger="hover" content="Tooltip!">
    <span>hover me</span>
  </Tooltip>
);

export const Right = () => (
  <Tooltip right trigger="hover" content="Tooltip!">
    <span>hover me</span>
  </Tooltip>
);

export const Top = () => (
  <Tooltip top trigger="hover" content="Tooltip!">
    <span>hover me</span>
  </Tooltip>
);
