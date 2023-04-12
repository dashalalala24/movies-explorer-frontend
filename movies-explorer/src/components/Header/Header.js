import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Logo from '../Logo/Logo';
import profileIcon from '../../images/profile_icon.svg';
import './Header.css';

function Header() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <header className='header header_type_landing'>
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
          </header>
        }
      />
      <Route
        path='/movies'
        element={
          <header className='header'>
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
                    className='header__nav-link header__nav-link_inactive'>
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
          </header>
        }
      />
    </Routes>
  );
}

export default Header;
