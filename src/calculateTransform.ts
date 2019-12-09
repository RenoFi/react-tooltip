export default (child: ClientRect | DOMRect, parent: ClientRect | DOMRect, position: string) => {
  switch (position) {
    case 'bottom':
      return `translate3d(${child.left +
        child.width / 2 -
        parent.width / 2}px, ${child.top + child.height + 4}px, 0px)`;
    case 'left':
      return `translate3d(${child.left - parent.width - 4}px, ${child.top +
        child.height / 2 -
        17}px, 0px)`;
    case 'right':
      return `translate3d(${child.left + child.width + 4}px, ${child.top +
        child.height / 2 -
        17}px, 0px)`;
    case 'top':
      return `translate3d(${child.left +
        child.width / 2 -
        parent.width / 2}px, ${child.top - parent.height - 4}px, 0px)`;
    default:
      return undefined;
  }
};
