import React, { useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import NoResult from '../NoResult/NoResult';

import { MOVIES_MESSAGE } from '../../utils/constants';
import './SavedMovies.css';

function SavedMovies({
  handleSearch,
  movies,
  currentPath,
  onDeleteClick,
  isSearchFormValid,
  setIsSearchFormValid,
  setErrorMessage,
  errorMessage,
  isLoading,
  setSavedMovies,
  handleCheckboxChange,
}) {
  useEffect(() => {
    setIsSearchFormValid(true);
  }, []);

  useEffect(() => {
    const savedMoviesFromStorage = JSON.parse(localStorage.getItem('savedMovies'));
    setSavedMovies(savedMoviesFromStorage);
    if (savedMoviesFromStorage.length === 0) {
      setErrorMessage(MOVIES_MESSAGE.NO_SAVED_MOVIES);
    }
    if (!isSearchFormValid) {
      setSavedMovies([]);
    }
  }, [setSavedMovies, isSearchFormValid]);
  return (
    <main
      className='saved-movies'
      aria-label='Сохраненные фильмы'>
      <SearchForm
        handleSearch={handleSearch}
        setIsSearchFormValid={setIsSearchFormValid}
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage}
        currentPath={currentPath}
        handleCheckboxChange={handleCheckboxChange}
      />
      {isLoading ? (
        <Preloader />
      ) : movies.length === 0 || !isSearchFormValid ? (
        <NoResult errorMessage={errorMessage} />
      ) : (
        <MoviesCardList
          movies={movies}
          currentPath={currentPath}
          onDeleteClick={onDeleteClick}
        />
      )}
    </main>
  );
}

export default SavedMovies;
