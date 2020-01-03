import * as React from 'react';
import calculateTransform from './calculateTransform';
import getPosition from './getPosition';
import {Position, PosProps, Rect} from './types';
import {getScrollTop} from './utils/dom';
import omit from './utils/omit';
import pick from './utils/pick';

const positionKeys: Array<keyof PosProps> = ['left', 'right', 'top', 'bottom'];

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
  extRef: React.RefObject<HTMLElement>;
  onClickOutside: () => void;
}

export type Ref = HTMLElement;

class Content extends React.Component<ContentProps, {}> {
  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }
  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }
  public render() {
    const {
      active,
      children,
      childBox,
      parentBox,
      position,
      sticky,
      style,
      visible,
      className,
      extRef,
      onClickOutside,
      ...props
    } = this.props;
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
        : {}),
      opacity: visible ? 1 : 0,
    };
    return (
      <span
        ref={extRef}
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
  }
  private handleClickOutside = (event: Event) => {
    if (
      this.props.extRef &&
      this.props.extRef.current &&
      !this.props.extRef.current.contains(event.target as any)
    ) {
      this.props.onClickOutside();
    }
  }
}

export default React.forwardRef(
  (props: Omit<ContentProps, 'extRef'>, ref: React.RefObject<HTMLElement>) =>
    <Content extRef={ref} {...props} />);
