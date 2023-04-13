import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   setIsPageLoading(true);
  // }, []);

  return (
    <div className='page'>
      {isPageLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<Main />}
            />
            <Route
              path='/profile'
              element={<Profile />}
            />
            <Route
              path='/movies'
              element={<Movies />}
            />
            <Route
              path='/saved-movies'
              element={<SavedMovies />}
            />
            <Route
              path='/signin'
              element={<Login />}
            />
            <Route
              path='/signup'
              element={<Register />}
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
