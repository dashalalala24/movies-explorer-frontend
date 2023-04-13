import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './AuthPage.css';

function AuthPage({ title, formName, children, buttonText, linkText, linkTo, link }) {
  return (
    <section className='auth'>
      <Logo />
      <h3 className='auth__title'>{title}</h3>
      <form
        className='auth__form'
        name={formName}
        noValidate
        autoComplete='off'>
        {children}
        <button
          className={`auth__button`}
          type='submit'>
          {buttonText}
        </button>
      </form>
      <p className='auth__link-text'>
        {linkText}
        <Link
          to={linkTo}
          className='auth__link'>
          {link}
        </Link>
        {/* {? 'Ещё не зарегистрированы? Регистрация'
            : 'Уже зарегистрированы? Войти'} */}
      </p>
    </section>
  );
}

export default AuthPage;
