export type Position = "bottom" | "left" | "right" | "top";
export type Trigger = "click" | "focus" | "hover";
export interface PosProps {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}
export type Rect = (ClientRect | DOMRect) & { x: number; y: number };
