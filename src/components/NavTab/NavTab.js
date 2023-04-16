import './NavTab.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab_list'>
        <li className='nav-tab_list-item'>
          <Link
            className='nav-tab__link'
            to='/signup'>
            Регистрация
          </Link>
        </li>
        <li className='nav-tab_list-item'>
          <Link
            className='nav-tab__link nav-tab__link_type_login'
            to='/signin'>
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
