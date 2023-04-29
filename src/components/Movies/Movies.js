import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import NoResult from '../NoResult/NoResult';

import useMoviesNumber from '../../hooks/useMoviesNumber';

import './Movies.css';

function Movies({
  handleSearch,
  movies,
  currentPath,
  onSaveClick,
  onDeleteClick,
  isSearchFormValid,
  setIsSearchFormValid,
  setErrorMessage,
  errorMessage,
  isLoading,
  setMovies,
  isShortMovies,
  handleCheckboxChange,
}) {
  const { moviesNumber, addMoviesRow } = useMoviesNumber();

  console.log(movies);
  useEffect(() => {
    setErrorMessage('');
  }, []);

  useEffect(() => {
    const moviesFromStorage = localStorage.getItem('searchedMovies');

    moviesFromStorage ? setMovies(JSON.parse(moviesFromStorage)) : setMovies([]);
    if (!isSearchFormValid) {
      setMovies([]);
    }
  }, [setMovies, isSearchFormValid, isShortMovies]);

  return (
    <main
      className='movies'
      aria-label='Фильмы'>
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
        <NoResult
          isSearchFormValid={isSearchFormValid}
          errorMessage={errorMessage}
        />
      ) : (
        <MoviesCardList
          movies={movies}
          currentPath={currentPath}
          onSaveClick={onSaveClick}
          onDeleteClick={onDeleteClick}
          moviesNumber={moviesNumber}
        />
      )}
      <button
        className='movies__more-button'
        type='button'
        disabled={movies.length < 5 || movies.length <= moviesNumber ? true : false}
        onClick={addMoviesRow}>
        Ещё
      </button>
    </main>
  );
}

export default Movies;
