import React, { useEffect } from 'react';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import { VALIDATION } from '../../utils/constants';
import AuthPage from '../AuthPage/AuthPage';

function Login({ handleLogin }) {
  const initialValues = {
    email: '',
    password: '',
  };

  const { values, errors, isValid, handleChange, setIsValid, resetForm } =
    useFormAndValidation(initialValues);

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = values;
    if (!email || !password) {
      return;
    }
    handleLogin({ email, password });
  }

  useEffect(() => {
    resetForm();
    setIsValid(false);
  }, [setIsValid]);

  return (
    <AuthPage
      formName='login'
      title='Рады видеть!'
      buttonText='Войти'
      linkText='Ещё не зарегистрированы?'
      linkTo='/signup'
      link='Регистрация'
      onSubmit={handleSubmit}
      isValid={isValid}>
      <div className='auth__inputs'>
        <label
          htmlFor='email-input'
          className='auth__label auth__label_type_email'>
          E-mail
        </label>
        <input
          className='auth__input auth__input_type_email'
          id='email-input'
          type='email'
          name='email'
          autoComplete='off'
          pattern={VALIDATION.email.pattern}
          placeholder='Введите электронную почту'
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        <span
          id='email-input-error'
          className='auth__error email-input-error'>
          {errors.email}
        </span>

        <label
          htmlFor='password-input'
          className='auth__label auth__label_type_password'>
          Пароль
        </label>
        <input
          className='auth__input auth__input_type_password'
          id='password-input'
          type='password'
          name='password'
          autoComplete='off'
          placeholder='Введите пароль'
          value={values.password || ''}
          onChange={handleChange}
          required
        />
        <span
          id='password-input-error'
          className='auth__error password-input-error'>
          {errors.password}
        </span>
      </div>
    </AuthPage>
  );
}

export default Login;
