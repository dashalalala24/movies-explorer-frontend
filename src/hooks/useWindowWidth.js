import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const getWindowWidth = () => setWindowWidth(window.innerWidth);

    let timer = setTimeout(getWindowWidth, 300);

    window.addEventListener('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(getWindowWidth, 300);
    });

    return () => window.removeEventListener('resize', getWindowWidth);
  }, []);

  return windowWidth;
}

export default useWindowWidth;
