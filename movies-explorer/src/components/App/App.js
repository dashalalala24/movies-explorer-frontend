import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

import './App.css';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  // для проверки прелоадера
  // const [isPageLoading, setIsPageLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);

  //для проверки верстки кнопок в секции movies
  const [isSaved, setIsSaved] = useState(true);
  function handleCardSaved() {
    setIsSaved(!isSaved);
  }

  const [isBurgerActive, setIsBurgerActive] = useState(false);
  function handleOpenHeader() {
    setIsBurgerActive(!isBurgerActive);
  }

  const [isFormActive, setIsFormActive] = useState(false);
  function activateForm() {
    setIsFormActive(true);
  }

  return (
    <div className='page'>
      {isPageLoading ? (
        <Preloader />
      ) : (
        <>
          <Header
            currentPath={currentPath}
            onOpenMenu={handleOpenHeader}
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
                <Profile
                  isFormActive={isFormActive}
                  activateForm={activateForm}
                />
              }
            />
            <Route
              path='/movies'
              element={
                <Movies
                  currentPath={currentPath}
                  isSaved={isSaved}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={<SavedMovies currentPath={currentPath} />}
            />
            <Route
              path='/signin'
              element={<Login currentPath={currentPath} />}
            />
            <Route
              path='/signup'
              element={<Register currentPath={currentPath} />}
            />

            <Route
              path='*'
              element={<NotFoundPage />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
