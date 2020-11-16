export function getScrollTop(): number {
  if (window && window.pageYOffset) {
    return window.pageYOffset;
  }
  if (
    document &&
    document.documentElement &&
    document.documentElement.scrollTop
  ) {
    return document.documentElement.scrollTop;
  }
  return 0;
}
