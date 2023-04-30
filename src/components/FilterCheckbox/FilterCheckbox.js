import React, { useEffect } from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({
  currentPath,
  handleCheckboxChange,
  keyword,
  isShortMovies,
  setIsShortMovies,
}) {
  useEffect(() => {
    if (currentPath === '/movies') {
      const checkboxStatusFromStorage = localStorage.getItem('isShortMovies');

      checkboxStatusFromStorage === 'true' ? setIsShortMovies(true) : setIsShortMovies(false);
    }
  }, []);

  function handleChange() {
    setIsShortMovies(!isShortMovies);
    if (currentPath === '/movies') {
      localStorage.setItem('isShortMovies', !isShortMovies);
    }
    handleCheckboxChange(keyword, !isShortMovies);
  }

  return (
    <div className='filter-checkbox'>
      <span className='filter-checkbox__name'>Короткометражки</span>
      <label className='filter-checkbox__container'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          checked={isShortMovies}
          onChange={handleChange}
        />
        <span className='filter-checkbox__switch' />
      </label>
    </div>
  );
}

export default FilterCheckbox;
