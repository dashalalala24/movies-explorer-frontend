import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form
        className='search-form__form'
        name='search-form'
        noValidate>
        <input
          className='search-form__input'
          name='search-form-input'
          id='search-form-input'
          type='text'
          placeholder='Фильм'
          maxLength={100}
          required
        />

        <button
          className='search-form__button'
          aria-label='Искать'
          type='submit'></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
