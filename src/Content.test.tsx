/* tslint:disable: no-empty */
import {render} from '@testing-library/react';
import React from 'react';
import Content from './Content';

describe('Content', () => {
  const position = {left: 0, top: 0, right: 0, bottom: 0, x: 0, y: 0};
  const childBox = {width: 50, height: 20, ...position, x: 100, y: 100};
  const parentBox = {width: 50, height: 20, ...position};

  it('should display a tooltip', () => {
    const {container, getByText} = render(
      <Content
        active
        sticky
        visible
        position="left"
        childBox={childBox}
        parentBox={parentBox}
        onClickOutside={() => {}}>
        Hello, world!
      </Content>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="awesome-react-tooltip awesome-react-tooltip-left "
        style="display: inline-block; transition: opacity 500ms ease; z-index: 1009; left: 0px; position: absolute; top: 0px; transform: translate3d(46px, 93px, 0px); will-change: transform; opacity: 1;"
      >
        Hello, world!
      </span>
    `);
  });
});
