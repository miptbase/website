import { useState, useEffect } from 'react';

const DESKTOP_BREAKPOINT = 641;

export function useIsMobile() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
      handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [width]);
  return width < DESKTOP_BREAKPOINT;
}
