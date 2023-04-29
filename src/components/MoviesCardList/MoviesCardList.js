import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, currentPath, onSaveClick, onDeleteClick, moviesNumber }) {
  function checkSaveStatus(moviesCard) {
    const currentMovie = JSON.parse(localStorage.getItem('savedMovies')).find(
      (movie) => movie.movieId === moviesCard.movieId
    );

    return currentMovie
      ? { isMovieStatusSaved: true, id: currentMovie._id }
      : { isMovieStatusSaved: false, id: '' };
  }

  return (
    <section className='movies-card-list'>
      {movies.slice(0, moviesNumber).map((moviesCard) => (
        <MoviesCard
          moviesCard={moviesCard}
          currentPath={currentPath}
          onSaveClick={onSaveClick}
          onDeleteClick={onDeleteClick}
          key={currentPath === '/movies' ? moviesCard.movieId : moviesCard._id}
          saveStatus={
            currentPath === '/movies'
              ? checkSaveStatus(moviesCard)
              : { isMovieStatusSaved: true, id: moviesCard._id }
          }
        />
      ))}
    </section>
  );
}

export default MoviesCardList;
