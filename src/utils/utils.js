import { IMAGES_URL } from './constants';

const unifyMovieData = (movies) => {
  return movies.map((moviesCard) => ({
    movieId: moviesCard.id,
    nameRU: moviesCard.nameRU,
    nameEN: moviesCard.nameEN,
    country: moviesCard.country,
    director: moviesCard.director,
    duration: moviesCard.duration,
    year: moviesCard.year,
    description: moviesCard.description,
    trailerLink: moviesCard.trailerLink,
    image: `${IMAGES_URL}${moviesCard.image.url}`,
    thumbnail: `${IMAGES_URL}${moviesCard.image.formats.thumbnail.url}`,
  }));
};

const getMovieDuration = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours === 0 ? minutes + 'мин' : hours + 'ч ' + minutes + 'м';
};

const filterMoviesByKeyword = (keyword, movies) => {
  return movies.filter(function (movie) {
    return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
  });
};

const filterMoviesByDuration = (movies) => {
  return movies.filter((movie) => movie.duration <= 40);
};

export { unifyMovieData, getMovieDuration, filterMoviesByKeyword, filterMoviesByDuration };
