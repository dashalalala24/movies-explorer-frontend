import React, { useEffect, useState } from 'react';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import { MOVIES_MESSAGE } from '../../utils/constants';
import './SearchForm.css';

function SearchForm({
  handleSearch,
  setIsSearchFormValid,
  setErrorMessage,
  currentPath,
  errorMessage,
  handleCheckboxChange,
}) {
  const [isShortMovies, setIsShortMovies] = useState(false);

  const { values, handleChange, setValues } = useFormAndValidation();

  useEffect(() => {
    setIsSearchFormValid(true);

    const keywordFromStorage = localStorage.getItem('searchedMoviesKeyword');

    if (currentPath === '/movies' && keywordFromStorage) {
      setValues({ keyword: keywordFromStorage });
    } else {
      setValues('');
    }
  }, [currentPath]);

  let { keyword } = values;

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log('keyword', keyword);

    if (keyword) {
      setIsSearchFormValid(true);
      handleSearch(keyword, isShortMovies);
    } else {
      setIsSearchFormValid(false);
      setErrorMessage(MOVIES_MESSAGE.NO_KEYWORD);
      if (currentPath === '/movies') {
      }
    }
    console.log(errorMessage);
  }

  return (
    <section className='search-form'>
      <form
        className='search-form__form'
        name='search-form'
        onSubmit={handleSubmit}>
        <input
          className='search-form__input'
          id='search-form-input'
          name='keyword'
          type='text'
          placeholder='Фильм'
          maxLength={100}
          value={values.keyword || ''}
          onChange={handleChange}
        />

        <button
          className='search-form__button'
          aria-label='Искать'
          type='submit'></button>
      </form>
      <FilterCheckbox
        currentPath={currentPath}
        handleCheckboxChange={handleCheckboxChange}
        keyword={keyword}
        isShortMovies={isShortMovies}
        setIsShortMovies={setIsShortMovies}
      />
    </section>
  );
}

export default SearchForm;
