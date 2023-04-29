import React, { useState, useEffect } from 'react';

import { getMovieDuration } from '../../utils/utils';
import './MoviesCard.css';

function MoviesCard({ moviesCard, currentPath, onSaveClick, onDeleteClick, saveStatus }) {
  const [isMovieStatusSaved, setIsMovieStatusSaved] = useState(false);

  useEffect(() => {
    setIsMovieStatusSaved(saveStatus.isMovieStatusSaved);
  }, [saveStatus]);

  function handleSaveMovie() {
    onSaveClick(moviesCard);
    setIsMovieStatusSaved(true);
  }
  function handleDeleteMovie() {
    onDeleteClick(moviesCard);
    setIsMovieStatusSaved(false);
  }

  return (
    <div className='movies-card'>
      <a
        className='movies-card__pic-link'
        target='_blank'
        rel='noreferrer'
        href={moviesCard.trailerLink}>
        <img
          className='movies-card__pic'
          alt={`Обложка фильма: ${moviesCard.nameRU}`}
          src={moviesCard.image}
        />
      </a>
      <div className='movies-card__info'>
        <a
          className='movies-card__name-link'
          target='_blank'
          rel='noreferrer'
          href={moviesCard.trailerLink}>
          <p className='movies-card__name'>{moviesCard.nameRU}</p>{' '}
        </a>
        <p className='movies-card__duration'>{getMovieDuration(moviesCard.duration)}</p>
      </div>
      {currentPath === '/saved-movies' ? (
        <button
          type='button'
          onClick={handleDeleteMovie}
          className='movies-card__button movies-card__button_style_round movies-card__button_type_remove'
          aria-label='Удалить фильм из сохраненных'></button>
      ) : isMovieStatusSaved ? (
        <button
          type='button'
          onClick={handleDeleteMovie}
          className='movies-card__button movies-card__button_style_round movies-card__button_type_saved'
          aria-label='Фильм сохранен'></button>
      ) : (
        <button
          type='button'
          onClick={handleSaveMovie}
          className='movies-card__button movies-card__button_type_to-save'
          aria-label='Сохранить фильм'>
          Сохранить
        </button>
      )}
    </div>
  );
}

export default MoviesCard;
