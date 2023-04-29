import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import { APP_MESSAGE, MOVIES_MESSAGE } from '../../utils/constants';
import { unifyMovieData, filterMoviesByKeyword, filterMoviesByDuration } from '../../utils/utils';

import successIcon from '../../images/success.svg';
import failIcon from '../../images/fail.svg';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isSearchFormValid, setIsSearchFormValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [actionMessage, setActionMessage] = useState({ icon: '', message: '' });
  const allMoviesFromStorage = JSON.parse(localStorage.getItem('allMovies'));
  const savedMoviesFromStorage = JSON.parse(localStorage.getItem('savedMovies'));

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getUserInfo(jwt)
        .then((userData) => {
          setLoggedIn(true);
          setUserData({ name: userData.name, email: userData.email });
        })
        .catch((err) => console.log(err));

      mainApi
        .getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies([...savedMovies.data]);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      setErrorMessage('');
      setIsPageLoading(true);
      setIsLoading(true);
      setIsBurgerActive(false);

      const jwt = localStorage.getItem('jwt');

      Promise.all([mainApi.getSavedMovies(), mainApi.getUserInfo(jwt)])
        .then(([savedMovies, userInfo]) => {
          if (savedMovies.length === 0) {
            setErrorMessage(MOVIES_MESSAGE.NO_SAVED_MOVIES);
          } else {
            setSavedMovies(savedMovies.data);
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies.data));
          }

          setCurrentUser(userInfo);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsPageLoading(false);
          setIsLoading(false);
        });
    }
  }, [loggedIn]);

  function handleOpenHeader() {
    setIsBurgerActive(!isBurgerActive);
  }

  function toggleForm() {
    setIsFormActive(!isFormActive);
  }

  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then((userData) => {
        setUserData({ name: userData.name, email: userData.email });
      })
      .then(() => {
        mainApi
          .login(email, password)
          .then((data) => {
            if (data.token) {
              localStorage.setItem('jwt', data.token);
            }
            setLoggedIn(true);
          })
          .catch((err) => console.log(err));
      })
      .then(() => {
        navigate('/movies', { replace: true });
      })
      .catch((res) => {
        if (res === 409) {
          setActionMessage({ icon: failIcon, message: APP_MESSAGE.CONFLICT });
        } else {
          setActionMessage({ icon: failIcon, message: APP_MESSAGE.DEFAULT_ERROR });
        }
        setInfoTooltipOpen(true);
      });
  }

  function handleLogin({ email, password }) {
    mainApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
        }
        setCurrentUser(data);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
        setUserData({
          name: data.user.name,
          email: data.user.email,
        });
      })
      .catch((res) => {
        if (res === 401) {
          setActionMessage({ icon: failIcon, message: APP_MESSAGE.LOGIN_FAILED });
        } else {
          setActionMessage({ icon: failIcon, message: APP_MESSAGE.DEFAULT_ERROR });
        }
        setInfoTooltipOpen(true);
      });
  }

  function handleEditProfile(data) {
    setIsLoading(true);
    mainApi
      .setUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        setUserData(data);
        setActionMessage({ icon: successIcon, message: APP_MESSAGE.SUCCESS });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
        setInfoTooltipOpen(true);
      });
  }

  function setFilteredMovies(newArray, setArray) {
    if (newArray.length === 0) {
      setErrorMessage(MOVIES_MESSAGE.NOT_FOUND);
      setArray([]);
    } else {
      setArray(newArray);
    }
  }

  function filterMovies(keyword, isShortMovies, movies) {
    const filteredMoviesByKeyword = filterMoviesByKeyword(keyword, movies);
    const filteredMovies = isShortMovies
      ? filterMoviesByDuration(filteredMoviesByKeyword)
      : filteredMoviesByKeyword;

    if (currentPath === '/movies') {
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('searchedMoviesKeyword', keyword);

      setFilteredMovies(filteredMovies, setMovies);
    } else {
      setFilteredMovies(filteredMovies, setSavedMovies);
    }
  }

  function handleSearchInMovies(keyword, isShortMovies) {
    if (allMoviesFromStorage !== null) {
      filterMovies(keyword, isShortMovies, allMoviesFromStorage);
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          const allMovies = unifyMovieData(movies);

          localStorage.setItem('allMovies', JSON.stringify(allMovies));

          filterMovies(keyword, isShortMovies, allMovies);
        })
        .catch(setErrorMessage(MOVIES_MESSAGE.SERVER_ERROR))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function handleSearchInSavedMovies(keyword, isShortMovies) {
    if (savedMoviesFromStorage !== null) {
      filterMovies(keyword, isShortMovies, savedMoviesFromStorage);
    } else {
      setErrorMessage(MOVIES_MESSAGE.NO_SAVED_MOVIES);
    }
  }
  function handleMoviesCheckboxChange(keyword, isShortMovies) {
    if (keyword) {
      handleSearchInMovies(keyword, isShortMovies);
    }
  }

  function handleSavedMoviesCheckboxChange(keyword, isShortMovies) {
    if (!keyword) {
      isShortMovies
        ? setFilteredMovies(filterMoviesByDuration(savedMovies), setSavedMovies)
        : setSavedMovies(savedMoviesFromStorage);
    } else {
      handleSearchInSavedMovies(keyword, isShortMovies);
    }
  }

  function handleSaveMovie(movie) {
    if (movie.owner !== currentUser._id) {
      mainApi
        .saveMovie(movie)
        .then((movie) => {
          setSavedMovies([...savedMovies, movie]);
          localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, movie]));
        })
        .catch((error) => console.log(error));
    }
  }

  function handleDeleteMovie(moviesCard) {
    let movieId;

    if (moviesCard._id) {
      movieId = moviesCard._id;
    } else {
      const cardFromMainApi = savedMovies.find((movie) => movie.movieId === moviesCard.movieId);
      movieId = cardFromMainApi._id;
    }

    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const newSavedMovies = savedMovies.filter((data) => {
          return !(data._id === movieId);
        });
        setSavedMovies(newSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
        if (newSavedMovies.length === 0) {
          setErrorMessage(MOVIES_MESSAGE.NO_SAVED_MOVIES);
        }
      })
      .catch((error) => console.log(error));
  }

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      setInfoTooltipOpen(false);
    }
  }

  function handleInfoTooltipClose() {
    setInfoTooltipOpen(false);
  }

  function handleLogout() {
    localStorage.clear();
    setMovies([]);
    setSavedMovies([]);
    setCurrentUser({});
    setLoggedIn(false);
    setErrorMessage('');
    setIsBurgerActive(false);
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        {isPageLoading ? (
          <Preloader />
        ) : (
          <>
            <Header
              currentPath={currentPath}
              loggedIn={loggedIn}
              onClickMenu={handleOpenHeader}
              isBurgerActive={isBurgerActive}
            />
            <Routes>
              <Route
                path='/'
                element={<Main />}
              />
              <Route
                path='/profile'
                element={
                  <ProtectedRoute
                    element={Profile}
                    userData={userData}
                    isFormActive={isFormActive}
                    toggleForm={toggleForm}
                    onEditProfile={handleEditProfile}
                    onLogout={handleLogout}
                    isLoading={isLoading}
                  />
                }
              />
              <Route
                path='/movies'
                element={
                  <ProtectedRoute
                    element={Movies}
                    handleSearch={handleSearchInMovies}
                    currentPath={currentPath}
                    onSaveClick={handleSaveMovie}
                    onDeleteClick={handleDeleteMovie}
                    movies={movies}
                    isSearchFormValid={isSearchFormValid}
                    setIsSearchFormValid={setIsSearchFormValid}
                    setErrorMessage={setErrorMessage}
                    errorMessage={errorMessage}
                    isLoading={isLoading}
                    setMovies={setMovies}
                    handleCheckboxChange={handleMoviesCheckboxChange}
                  />
                }
              />
              <Route
                path='/saved-movies'
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    handleSearch={handleSearchInSavedMovies}
                    currentPath={currentPath}
                    onDeleteClick={handleDeleteMovie}
                    movies={savedMovies}
                    isSearchFormValid={isSearchFormValid}
                    setIsSearchFormValid={setIsSearchFormValid}
                    setErrorMessage={setErrorMessage}
                    errorMessage={errorMessage}
                    isLoading={isLoading}
                    setSavedMovies={setSavedMovies}
                    handleCheckboxChange={handleSavedMoviesCheckboxChange}
                  />
                }
              />
              <Route
                path='/signin'
                element={<Login handleLogin={handleLogin} />}
              />
              <Route
                path='/signup'
                element={<Register handleRegister={handleRegister} />}
              />

              <Route
                path='*'
                element={<NotFoundPage />}
              />
            </Routes>
            <Footer />

            <InfoTooltip
              isOpen={isInfoTooltipOpen}
              onClose={handleInfoTooltipClose}
              onOverlayClick={handleOverlayClick}
              message={actionMessage.message}
              statusIcon={actionMessage.icon}
            />
          </>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
