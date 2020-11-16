import {Rect} from './types';

export default (
  child: Rect,
  parent: Rect,
  position: string,
  scrollTop = 0,
): string => {
  switch (position) {
    case 'bottom':
      return `translate3d(${Math.round(
        child.x + child.width / 2 - parent.width / 2,
      )}px, ${Math.round(child.y + child.height + 4 + scrollTop)}px, 0px)`;
    case 'left':
      return `translate3d(${Math.round(
        child.x - parent.width - 4,
      )}px, ${Math.round(child.y + child.height / 2 - 17 + scrollTop)}px, 0px)`;
    case 'right':
      return `translate3d(${Math.round(
        child.x + child.width + 4,
      )}px, ${Math.round(child.y + child.height / 2 - 17 + scrollTop)}px, 0px)`;
    case 'top':
      return `translate3d(${Math.round(
        child.x + child.width / 2 - parent.width / 2,
      )}px, ${Math.round(child.y - parent.height - 4 + scrollTop)}px, 0px)`;
    default:
      return undefined;
  }
};
