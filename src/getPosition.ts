import {Position, PosProps} from './types';

export default (
  position: Position,
  {left, right, top, bottom}: PosProps,
): Position => {
  if (left) {
    return 'left';
  }
  if (right) {
    return 'right';
  }
  if (top) {
    return 'top';
  }
  if (bottom) {
    return 'bottom';
  }
  return position;
};
