import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Profile.css';

function Profile({ isFormActive, activateForm }) {
  // const navigate = useNavigate();

  // function goBack() {
  //   navigate(-1, { replace: true });
  // }

  return (
    <main className='profile'>
      <form
        className='profile__form'
        name='edit-profile'
        autoComplete='off'>
        <div className='profile__container'>
          <h3 className='profile__title'>{`Привет, exampleName!`}</h3>
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
                placeholder='Введите имя  '
                value='exampleName'
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
                placeholder='Введите электронную почту  '
                value='example@mail.ru'
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
            {/* Здесь текст короткой ошибки */}
            {/* Здесь текст просто гигантской ошибки длиною в 3 строки например.Здесь текст просто
            гигантской ошибки длиною в 3 строки например.Здесь текст просто гигантской ошибки длиною
            в 3 строки например. */}
          </span>
          <button
            className={`profile__button profile__edit-button ${
              isFormActive ? 'profile__submit-button profile__submit-button_disabled' : ''
            }`}
            type='button'
            onClick={activateForm}>
            {isFormActive ? 'Сохранить' : 'Редактировать'}
          </button>
          <Link
            to='/'
            className={`profile__button profile__logout-button ${
              isFormActive ? 'profile__logout-button_disabled' : ''
            }`}>
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Profile;
