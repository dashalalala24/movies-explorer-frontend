import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import './Header.css';

function Header({ currentPath, isBurgerActive, onOpenMenu }) {
  const isVisible =
    currentPath === '/' ||
    currentPath === '/movies' ||
    currentPath === '/saved-movies' ||
    currentPath === '/profile';

  return isVisible ? (
    <header className={`header ${currentPath === '/' ? 'header_type_landing' : ''}`}>
      <div className='header__container'>
        <Logo />
        <Routes>
          <Route
            path='/'
            element={
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
            }
          />
          <Route
            path='*'
            element={
              <Navigation
                isBurgerActive={isBurgerActive}
                onOpenMenu={onOpenMenu}
              />
            }
          />
        </Routes>
      </div>
    </header>
  ) : null;
}

export default Header;
