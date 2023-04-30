import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './AuthPage.css';

function AuthPage({
  isValid,
  onSubmit,
  title,
  formName,
  children,
  buttonText,
  linkText,
  linkTo,
  link,
}) {
  return (
    <main className='auth'>
      <Logo />
      <h3 className='auth__title'>{title}</h3>
      <form
        className='auth__form'
        name={formName}
        autoComplete='off'
        noValidate
        onSubmit={onSubmit}>
        {children}
        <button
          className={`auth__button`}
          disabled={!isValid}
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
      </p>
    </main>
  );
}

export default AuthPage;
