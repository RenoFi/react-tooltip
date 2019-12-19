import {Rect} from './types';

export default (child: Rect, parent: Rect, position: string) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  switch (position) {
    case 'bottom':
      return `translate3d(${child.x +
        child.width / 2 -
        parent.width / 2}px, ${child.y + child.height + 4 + scrollTop}px, 0px)`;
    case 'left':
      return `translate3d(${child.x - parent.width - 4}px, ${child.y +
        child.height / 2 -
        17 + scrollTop}px, 0px)`;
    case 'right':
      return `translate3d(${child.x + child.width + 4}px, ${child.y +
        child.height / 2 -
        17 + scrollTop}px, 0px)`;
    case 'top':
      return `translate3d(${child.x +
        child.width / 2 -
        parent.width / 2}px, ${child.y - parent.height - 4 + scrollTop}px, 0px)`;
    default:
      return undefined;
  }
};
