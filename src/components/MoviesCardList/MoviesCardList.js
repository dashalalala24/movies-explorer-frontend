import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ buttonsHtml, onPicClick }) {
  return (
    <section className='movies-card-list'>
      {/* пока так */}
      <MoviesCard
        buttonsHtml={buttonsHtml}
        onPicClick={onPicClick}
      />
      <MoviesCard
        buttonsHtml={buttonsHtml}
        onPicClick={onPicClick}
      />
      <MoviesCard
        buttonsHtml={buttonsHtml}
        onPicClick={onPicClick}
      />
      <MoviesCard
        buttonsHtml={buttonsHtml}
        onPicClick={onPicClick}
      />
      <MoviesCard
        buttonsHtml={buttonsHtml}
        onPicClick={onPicClick}
      />
      <MoviesCard
        buttonsHtml={buttonsHtml}
        onPicClick={onPicClick}
      />
      <MoviesCard
        buttonsHtml={buttonsHtml}
        onPicClick={onPicClick}
      />
      <MoviesCard
        buttonsHtml={buttonsHtml}
        onPicClick={onPicClick}
      />
      <MoviesCard
        buttonsHtml={buttonsHtml}
        onPicClick={onPicClick}
      />
    </section>
  );
}

export default MoviesCardList;
