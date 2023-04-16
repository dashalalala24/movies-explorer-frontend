import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import NoResult from '../NoResult/NoResult';
import './SavedMovies.css';

function SavedMovies() {
  const [isLoading, setIsLoading] = useState(false);
  // для проверки прелоадера
  // const [isLoading, setIsLoading] = useState(true);

  // для проверки страницы без результатв
  const [isMoviesArrayEmpty, setIsMoviesArrayEmpty] = useState(false);
  // const [isMoviesArrayEmpty, setIsMoviesArrayEmpty] = useState(true);

  return isLoading ? (
    <Preloader />
  ) : (
    <main
      className='saved-movies'
      aria-label='Сохраненные фильмы'>
      <SearchForm />
      {isMoviesArrayEmpty ? (
        <NoResult />
      ) : (
        <MoviesCardList
          buttonsHtml={
            <button
              type='button'
              className='movies-card__button movies-card__button_style_round movies-card__button_type_remove'
              aria-label='Удалить фильм из сохраненных'></button>
          }
        />
      )}
    </main>
  );
}

export default SavedMovies;
