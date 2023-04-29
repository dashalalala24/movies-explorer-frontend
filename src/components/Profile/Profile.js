import React, { useEffect, useContext } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { VALIDATION } from '../../utils/constants';
import './Profile.css';

function Profile({ userData, isFormActive, toggleForm, onEditProfile, onLogout, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange, setValues, resetForm, setIsValid } =
    useFormAndValidation({});

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
    setIsValid(true);
  }, []);

  useEffect(() => {
    resetForm();
    setValues({ name: currentUser.name, email: currentUser.email });
    setIsValid(true);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email } = values;

    onEditProfile({ name, email });
  }

  const isDisabled =
    isFormActive &&
    (!isValid || (values.name === currentUser.name && values.email === currentUser.email));

  return (
    <main className='profile'>
      <form
        className='profile__form'
        name='edit-profile'
        autoComplete='off'
        onSubmit={handleSubmit}>
        <div className='profile__container'>
          <h3 className='profile__title'>{`Привет, ${userData.name}!`}</h3>
          <div className='profile__inputs-container'>
            <div className='profile__input-container'>
              <label
                htmlFor='name-input'
                className='profile__label'>
                Имя
              </label>
              <input
                className='profile__input'
                id='name-input'
                type='name'
                name='name'
                autoComplete='off'
                minLength={2}
                maxLength={30}
                pattern={VALIDATION.name.pattern}
                placeholder='Введите имя  '
                value={values.name || ''}
                onChange={handleChange}
                required
                disabled={!isFormActive}
              />
            </div>
            <div className='profile__input-container'>
              <label
                htmlFor='email-input'
                className='profile__label'>
                E-mail
              </label>
              <input
                className='profile__input'
                id='email-input'
                type='email'
                name='email'
                autoComplete='off'
                pattern={VALIDATION.email.pattern}
                placeholder='Введите электронную почту  '
                value={values.email || ''}
                onChange={handleChange}
                required
                disabled={!isFormActive}
              />
            </div>
          </div>
        </div>
        <div className='profile__buttons-container'>
          <span
            id='name-input-error'
            className='profile__error'>
            {errors.name || errors.email}
          </span>
          <button
            className={`profile__button profile__edit-button ${
              isFormActive ? 'profile__submit-button' : ''
            }`}
            type={!isFormActive ? 'submit' : 'button'}
            disabled={isDisabled}
            onClick={toggleForm}>
            {isFormActive ? 'Сохранить' : 'Редактировать'}
          </button>
          <button
            type='button'
            className='profile__button profile__logout-button'
            disabled={isFormActive}
            onClick={onLogout}>
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </main>
  );
}

export default Profile;
