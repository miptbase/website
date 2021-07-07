import { useState, useEffect } from 'react';

const DESKTOP_BREAKPOINT = 1024;

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
