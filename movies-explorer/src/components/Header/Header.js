import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Logo from '../Logo/Logo';
import profileIcon from '../../images/profile_icon.svg';
import './Header.css';

function Header() {
  return (
    <Routes>
      <Route
        // логика будет написана позже, поэтому здесь пока что 100500 роутов
        path='/movies'
        element={
          <header className='header'>
            <div className='header__container'>
              <Logo />
              <nav className='header__nav'>
                <ul className='header__nav-list'>
                  <li className='header__nav-list-item'>
                    <NavLink
                      to='/movies'
                      className='header__nav-link'>
                      Фильмы
                    </NavLink>
                  </li>
                  <li className='header__nav-list-item'>
                    <NavLink
                      to='/saved-movies'
                      className='header__nav-link'>
                      Сохранённые фильмы
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <Link
                className='header__profile-link'
                to='/profile'>
                <p className='header__profile-link-text'>Аккаунт</p>
                <img
                  className='header__profile-link-icon'
                  src={profileIcon}
                  alt='Ссылка на Ваш профиль'
                />
              </Link>
            </div>
          </header>
        }
      />
      <Route
        path='/saved-movies'
        element={
          <header className='header'>
            <div className='header__container'>
              <Logo />
              <nav className='header__nav'>
                <ul className='header__nav-list'>
                  <li className='header__nav-list-item'>
                    <NavLink
                      to='/movies'
                      className='header__nav-link'>
                      Фильмы
                    </NavLink>
                  </li>
                  <li className='header__nav-list-item'>
                    <NavLink
                      to='/saved-movies'
                      className='header__nav-link'>
                      Сохранённые фильмы
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <Link
                className='header__profile-link'
                to='/profile'>
                <p className='header__profile-link-text'>Аккаунт</p>
                <img
                  className='header__profile-link-icon'
                  src={profileIcon}
                  alt='Ссылка на Ваш профиль'
                />
              </Link>
            </div>
          </header>
        }
      />
      <Route
        path='/profile'
        element={
          <header className='header'>
            <div className='header__container'>
              <Logo />
              <nav className='header__nav'>
                <ul className='header__nav-list'>
                  <li className='header__nav-list-item'>
                    <NavLink
                      to='/movies'
                      className='header__nav-link'>
                      Фильмы
                    </NavLink>
                  </li>
                  <li className='header__nav-list-item'>
                    <NavLink
                      to='/saved-movies'
                      className='header__nav-link'>
                      Сохранённые фильмы
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <Link
                className='header__profile-link'
                to='/profile'>
                <p className='header__profile-link-text'>Аккаунт</p>
                <img
                  className='header__profile-link-icon'
                  src={profileIcon}
                  alt='Ссылка на Ваш профиль'
                />
              </Link>
            </div>
          </header>
        }
      />

      <Route
        path='/'
        element={
          <header className='header header_type_landing'>
            <div className='header__container'>
              <Logo />
              <nav className='header__nav'>
                <ul className='header__nav-list'>
                  <li className='header__nav-list-item'>
                    <Link
                      className='header__nav-link'
                      to='/signup'>
                      Регистрация
                    </Link>
                  </li>
                  <li className='header__nav-list-item'>
                    <Link
                      className='header__nav-link header__nav-link_type_login'
                      to='/signin'>
                      Войти
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        }
      />
      <Route
        path='*'
        element={null}
      />
    </Routes>
  );
}

export default Header;

// header_type_landing
