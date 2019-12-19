import React, {
  cloneElement,
  createRef,
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {createPortal} from 'react-dom';
import Content from './Content';
import {Position, PosProps, Rect, Trigger} from './types';

const empty: Rect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};

interface TooltipProps extends PosProps {
  active: boolean;
  content: ReactNode;
  position: Position;
  trigger: Trigger;
  className: string;
  style: CSSProperties;
}

const Tooltip: FunctionComponent<TooltipProps> = ({
  active = true,
  content,
  children,
  trigger,
  ...props
}) => {
  const childRef = createRef<HTMLElement>();
  const parentRef = createRef<HTMLElement>();
  const [visible, setVisible] = useState(false);
  const [childBox, setChildBox] = useState(empty);
  const [parentBox, setParentBox] = useState(empty);
  useEffect(() => {
    if (childRef.current) {
      const rect = childRef.current.getBoundingClientRect();
      if (rect) {
        setChildBox(rect);
      }
    }
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      if (rect) {
        setParentBox(rect);
      }
    }
  }, [content, visible]);
  const sticky = Boolean(children);
  const childrenProps = (children as any).props;
  const childProps =
    children && active
      ? {
          ...(childrenProps || {}),
          ...(trigger === 'click'
            ? {
                onClick: (event: Event) => {
                  setVisible(!visible);
                  if (childrenProps.onClick) {
                    childrenProps.onClick(event);
                  }
                },
              }
            : {}),
          ...(trigger === 'hover'
            ? {
                onMouseEnter: (event: Event) => {
                  setVisible(true);
                  if (childrenProps.onMouseEnter) {
                    childrenProps.onMouseEnter(event);
                  }
                },
                onMouseLeave: (event: Event) => {
                  setVisible(false);
                  if (childrenProps.onMouseLeave) {
                    childrenProps.onMouseLeave(event);
                  }
                },
              }
            : {}),
          ...(trigger === 'focus'
            ? {
                onBlur: (event: Event) => {
                  setVisible(false);
                  if (childrenProps.onBlur) {
                    childrenProps.onBlur(event);
                  }
                },
                onFocus: (event: Event) => {
                  setVisible(true);
                  if (childrenProps.onFocus) {
                    childrenProps.onFocus(event);
                  }
                },
              }
            : {}),
        }
      : {};
  const tooltip =
    (sticky && active) || !sticky ? (
      <Content
        ref={parentRef}
        childBox={childBox}
        parentBox={parentBox}
        active={active}
        sticky={sticky}
        visible={visible}
        onClickOutside={() => {
          if (trigger === 'click' && active) {
            setVisible(false);
          }
        }}
        {...props}>
        {visible && content}
      </Content>
    ) : null;
  return (
    <>
      {sticky
        ? active
          ? createPortal(tooltip, document.body)
          : null
        : tooltip}
      {sticky && cloneElement(children as any, {ref: childRef, ...childProps})}
    </>
  );
};

export default Tooltip;
