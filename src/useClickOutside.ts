import {useEffect} from 'react';

function useClickOutside(
  handler: Function,
  ref: React.RefObject<HTMLElement>,
): [React.RefObject<HTMLElement>] {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref?.current && !ref.current.contains(event.target as Node)) {
      handler();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [handler, ref]);

  return [ref];
}

export default useClickOutside;
