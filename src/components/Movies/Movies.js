import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import NoResult from '../NoResult/NoResult';
import './Movies.css';

function Movies({ onPicClick, isSaved }) {
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
      className='movies'
      aria-label='Фильмы'>
      <SearchForm />
      {isMoviesArrayEmpty ? (
        <NoResult />
      ) : (
        <>
          <MoviesCardList
            onPicClick={onPicClick}
            buttonsHtml={
              isSaved ? (
                <button
                  type='button'
                  className='movies-card__button movies-card__button_type_to-save'
                  aria-label='Сохранить фильм'>
                  Сохранить
                </button>
              ) : (
                <button
                  type='button'
                  className='movies-card__button movies-card__button_style_round movies-card__button_type_saved'
                  aria-label='Фильм сохранен'></button>
              )
            }
          />
          <button
            className='movies__more-button'
            type='button'>
            Ещё
          </button>
        </>
      )}
    </main>
  );
}

export default Movies;
