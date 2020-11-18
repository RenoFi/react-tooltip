import React, {forwardRef, ForwardRefExoticComponent} from 'react';
import calculateTransform from './calculateTransform';
import getPosition from './getPosition';
import {Position, PosProps, Rect} from './types';
import {getScrollTop} from './utils/dom';
import omit from './utils/omit';
import pick from './utils/pick';

type PosKeys = keyof PosProps;

const positionKeys: PosKeys[] = ['left', 'right', 'top', 'bottom'];

interface ContentProps extends PosProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  active: boolean;
  sticky: boolean;
  visible: boolean;
  position: Position;
  childBox: Rect;
  parentBox: Rect;
  onClickOutside: () => void;
}

export type Ref = HTMLElement;

const Content: ForwardRefExoticComponent<ContentProps> = forwardRef(
  (
    {
      active,
      children,
      childBox,
      parentBox,
      position,
      sticky,
      style,
      visible,
      className,
      onClickOutside,
      ...props
    }: ContentProps,
    ref: React.RefObject<HTMLElement>,
  ) => {
    const finalPosition = getPosition(position, pick(props, ...positionKeys));
    const transform =
      active && sticky
        ? calculateTransform(childBox, parentBox, finalPosition, getScrollTop())
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
        : {position: 'relative'}),
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
  },
);

Content.displayName = 'Content';

export default Content;
