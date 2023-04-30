import React, { useEffect } from 'react';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import { VALIDATION } from '../../utils/constants';
import AuthPage from '../AuthPage/AuthPage';

function Register({ handleRegister }) {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const { values, errors, isValid, handleChange, setIsValid, resetForm } =
    useFormAndValidation(initialValues);

  useEffect(() => {
    resetForm();
    setIsValid(false);
  }, [setIsValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    let { name, email, password } = values;
    handleRegister(name, email, password);
    // resetForm();
  }

  return (
    <AuthPage
      formName='register'
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      linkText='Уже зарегистрированы?'
      linkTo='/signin'
      link='Войти'
      isValid={isValid}
      onSubmit={handleSubmit}>
      <div className='auth__inputs'>
        <label
          htmlFor='name-input'
          className='auth__label auth__label_type_name'>
          Имя
        </label>
        <input
          className='auth__input auth__input_type_name'
          id='name-input'
          type='name'
          name='name'
          autoComplete='off'
          placeholder='Введите имя'
          minLength={2}
          maxLength={30}
          pattern={VALIDATION.name.pattern}
          value={values.name || ''}
          onChange={handleChange}
          required
        />
        <span
          id='name-input-error'
          className='auth__error name-input-error'>
          {errors.name}
        </span>

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

export default Register;
