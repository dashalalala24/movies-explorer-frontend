import { useState, useEffect } from 'react';

import useWindowWidth from './useWindowWidth';

import { MOVIES_NUMBER } from '../utils/constants';

function useMoviesNumber() {
  const { INITIAL, TO_ADD } = MOVIES_NUMBER;

  const windowWidth = useWindowWidth();
  const WINDOW_WIDTH = {
    MOBILE: windowWidth <= 745,
    TABLET: windowWidth > 745 && windowWidth <= 1199,
  };

  const [moviesNumber, setMoviesNumber] = useState(getInitialMoviesNumber(windowWidth));
  const moviesNumberToAdd = getMoviesNumberToAdd(windowWidth);
  const totalMoviesNumber = moviesNumber + moviesNumberToAdd;

  useEffect(() => {
    setMoviesNumber(getInitialMoviesNumber(windowWidth));
  }, [windowWidth]);

  function getInitialMoviesNumber() {
    if (WINDOW_WIDTH.MOBILE) return INITIAL.MOBILE;
    else if (WINDOW_WIDTH.TABLET) return INITIAL.TABLET;
    else return INITIAL.DESKTOP;
  }

  function getMoviesNumberToAdd() {
    if (WINDOW_WIDTH.MOBILE) return TO_ADD.MOBILE;
    else if (WINDOW_WIDTH.TABLET) return TO_ADD.TABLET;
    else return TO_ADD.DESKTOP;
  }

  function addMoviesRow() {
    setMoviesNumber(totalMoviesNumber);
  }

  return { moviesNumber, setMoviesNumber, addMoviesRow };
}

export default useMoviesNumber;
