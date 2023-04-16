import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <span className='filter-checkbox__name'>Короткометражки</span>
      <label className='filter-checkbox__container'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
        />
        <span className='filter-checkbox__switch' />
      </label>
    </div>
  );
}

export default FilterCheckbox;
