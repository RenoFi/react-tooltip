import * as React from 'react';
import calculateTransform from './calculateTransform';
import {Position, PosProps} from './types';
import {omit, pick} from './utils';

const getPosition = (
  position: Position,
  {left, right, top, bottom}: PosProps) => {
  if (left) { return 'left'; }
  if (right) { return 'right'; }
  if (top) { return 'top'; }
  if (bottom) { return 'bottom'; }
  return position;
};

const positionKeys: Array<keyof PosProps> = ['left', 'right', 'top', 'bottom'];

interface ContentProps extends PosProps {
  children: React.ReactNode;
  className: string;
  style: React.CSSProperties;
  active: boolean;
  sticky: boolean;
  visible: boolean;
  position: Position;
  childBox: ClientRect | DOMRect;
  parentBox: ClientRect | DOMRect;
}

export type Ref = HTMLElement;

const Content = React.forwardRef<Ref, ContentProps>(({
    active,
    children,
    childBox,
    parentBox,
    position,
    sticky,
    style,
    visible,
    className,
    ...props
  }, ref) => {
  const finalPosition = getPosition(position, pick(props, ...positionKeys));
  const transform =
    active && sticky
      ? calculateTransform(childBox, parentBox, finalPosition)
      : undefined;
  const customStyle: React.CSSProperties = {
    display: 'inline-block',
    transition: 'opacity 500ms ease',
    zIndex: 1009,
    ...(sticky
      ? {
          left: visible ? 0 : -10000,
          position: visible ? 'absolute' : 'fixed',
          top: visible ? 0 : -10000,
          transform,
          willChange: 'transform',
        }
      : {}),
    opacity: visible ? 1 : 0,
  };
  return (
    <span
      ref={ref}
      style={{...customStyle, ...style}}
      className={[
        'awesome-react-tooltip',
        `awesome-react-tooltip-${finalPosition}`,
        className,
      ].join(' ')}
      {...omit(props, ...positionKeys)}>
      {children}
    </span>
  );
});

export default Content;
