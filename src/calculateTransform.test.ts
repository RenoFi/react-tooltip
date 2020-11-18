import calculateTransform from './calculateTransform';

describe('calculateTransform', () => {
  const position = {left: 0, top: 0, right: 0, bottom: 0, x: 0, y: 0};
  const child = {width: 50, height: 20, ...position, x: 100, y: 100};
  const parent = {width: 50, height: 20, ...position};

  it('returns translate3d for left position', () => {
    const result = 'translate3d(46px, 93px, 0px)';
    expect(calculateTransform(child, parent, 'left', 0)).toEqual(result);
  });

  it('returns translate3d for right position', () => {
    const result = 'translate3d(154px, 93px, 0px)';
    expect(calculateTransform(child, parent, 'right', 0)).toEqual(result);
  });

  it('returns translate3d for top position', () => {
    const result = 'translate3d(100px, 76px, 0px)';
    expect(calculateTransform(child, parent, 'top', 0)).toEqual(result);
  });

  it('returns translate3d for bottom position', () => {
    const result = 'translate3d(100px, 124px, 0px)';
    expect(calculateTransform(child, parent, 'bottom', 0)).toEqual(result);
  });

  it('returns undefined', () => {
    const result = undefined as string;
    expect(calculateTransform(child, parent, null, 0)).toEqual(result);
  });
});
