import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies() {
  return (
    <section
      className='movies'
      aria-label='Фильмы'>
      <SearchForm />
      <MoviesCardList />
      <button
        className='movies__more-button'
        type='button'>
        Ещё
      </button>
    </section>
  );
}

export default Movies;
