import React from 'react';

import AuthPage from '../AuthPage/AuthPage';

function Register() {
  return (
    <AuthPage
      formName='register'
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      linkText='Уже зарегистрированы?'
      linkTo='/signin'
      link='Войти'>
      <div className='auth__inputs'>
        <label
          for='name-input'
          className='auth__label auth__label_type_name'>
          Имя
        </label>
        <input
          className='auth__input auth__input_type_name'
          id='name-input'
          type='name'
          name='name'
          autoComplete='off'
          minLength={2}
          maxLength={30}
          required
        />
        <span
          id='name-input-error'
          className='auth__error name-input-error'>
          {/* Здесь будут ошибки */}
        </span>

        <label
          for='email-input'
          className='auth__label auth__label_type_email'>
          E-mail
        </label>
        <input
          className='auth__input auth__input_type_email'
          id='email-input'
          type='email'
          name='email'
          autoComplete='off'
          required
        />
        <span
          id='email-input-error'
          className='auth__error email-input-error'>
          {/* Здесь будут ошибки */}
        </span>

        <label
          for='password-input'
          className='auth__label auth__label_type_password'>
          Пароль
        </label>
        <input
          className='auth__input auth__input_type_password'
          id='password-input'
          type='password'
          name='password'
          autoComplete='off'
          required
        />
        <span
          id='password-input-error'
          className='auth__error password-input-error'>
          {/* Здесь будут ошибки */}
        </span>
      </div>
    </AuthPage>
  );
}

export default Register;
