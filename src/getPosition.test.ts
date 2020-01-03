import getPosition from './getPosition';

describe('getPosition', () => {
  it('returns left', () => {
    expect(getPosition(null, {left: true})).toEqual('left');
    expect(getPosition('left', {})).toEqual('left');
  });

  it('returns right', () => {
    expect(getPosition(null, {right: true})).toEqual('right');
    expect(getPosition('right', {})).toEqual('right');
  });

  it('returns top', () => {
    expect(getPosition(null, {top: true})).toEqual('top');
    expect(getPosition('top', {})).toEqual('top');
  });

  it('returns bottom', () => {
    expect(getPosition(null, {bottom: true})).toEqual('bottom');
    expect(getPosition('bottom', {})).toEqual('bottom');
  });
});
