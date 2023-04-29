import React from 'react';
import { NavLink } from 'react-router-dom';

import BurgerButton from '../BurgerButton/BurgerButton';
import profileIcon from '../../images/profile_icon.svg';
import './Navigation.css';

function Navigation({ currentPath, isBurgerActive, onClickMenu }) {
  return (
    <div className={`navigation ${isBurgerActive ? 'navigation_active' : ''}`}>
      <nav className={`navigation__nav ${isBurgerActive ? 'navigation__nav_active' : ''}`}>
        <ul className='navigation__nav-list'>
          <li className='navigation__nav-list-item'>
            <NavLink
              to='/'
              className='navigation__nav-link'
              onClick={isBurgerActive ? onClickMenu : null}>
              Главная
            </NavLink>
          </li>
          <li className='navigation__nav-list-item'>
            <NavLink
              to='/movies'
              className='navigation__nav-link'
              onClick={isBurgerActive ? onClickMenu : null}>
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__nav-list-item'>
            <NavLink
              to='/saved-movies'
              className='navigation__nav-link'
              onClick={isBurgerActive ? onClickMenu : null}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>

        <NavLink
          className='navigation__profile-link'
          to='/profile'
          onClick={onClickMenu}>
          <p className='navigation__profile-link-text'>Аккаунт</p>
          <img
            className={`navigation__profile-link-icon ${
              currentPath === '/' && !isBurgerActive
                ? 'navigation__profile-link-icon_type_landing'
                : ''
            }`}
            src={profileIcon}
            alt='Посмотреть свой профиль'
          />
        </NavLink>
      </nav>
      <BurgerButton
        isBurgerActive={isBurgerActive}
        onClickMenu={onClickMenu}
      />
    </div>
  );
}

export default Navigation;
