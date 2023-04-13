import React from 'react';
import './MoviesCard.css';
import moviePic from '../../images/movie_card.jpg';

function MoviesCard() {
  return (
    <div className='movies-card'>
      <img
        className='movies-card__pic'
        alt='Обложка фильма'
        src={moviePic}
      />
      <div className='movies-card__info'>
        <p className='movies-card__name'>Здесь будет название фильма</p>
        <p className='movies-card__duration'>4ч 20м</p>
      </div>
      <button
        type='button'
        className='movies-card__button movies-card__saved-button movies-card__button_disabled'
        // className='movies-card__button movies-card__saved-button'
        aria-label='Сохранить фильм'></button>
      <button
        type='button'
        className='movies-card__button movies-card__remove-button movies-card__button_disabled'
        // className='movies-card__button movies-card__remove-button'
        aria-label='Удалить фильм из сохраненных'></button>
    </div>
  );
}

export default MoviesCard;
