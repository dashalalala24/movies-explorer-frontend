import React from 'react';
import './MoviesCard.css';
import moviePic from '../../images/movie_card.jpg';

function MoviesCard({ buttonsHtml, onPicClick }) {
  return (
    <div className='movies-card'>
      <img
        className='movies-card__pic'
        alt='Обложка фильма'
        src={moviePic}
        onClick={onPicClick}
      />
      <div className='movies-card__info'>
        <p className='movies-card__name'>Здесь будет название фильма</p>
        <p className='movies-card__duration'>4ч 20м</p>
      </div>
      {buttonsHtml}
    </div>
  );
}

export default MoviesCard;
