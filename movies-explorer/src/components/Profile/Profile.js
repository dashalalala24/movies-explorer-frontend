import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Profile.css';

function Profile() {
  // const navigate = useNavigate();

  // function goBack() {
  //   navigate(-1, { replace: true });
  // }

  return (
    <section className='profile'>
      <form
        className='profile__form'
        name='edit-profile'
        noValidate
        autoComplete='off'>
        <div className='profile__container'>
          <h3 className='profile__title'>{`Привет, exampleName!`}</h3>
          <div className='profile__inputs-container'>
            <div className='profile__input-container'>
              <label
                for='name-input'
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
                value='exampleName'
                required
                disabled
              />
            </div>
            <div className='profile__input-container'>
              <label
                for='email-input'
                className='profile__label'>
                E-mail
              </label>
              <input
                className='profile__input'
                id='email-input'
                type='email'
                name='email'
                autoComplete='off'
                value='example@mail.ru'
                required
                disabled
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
            // className='profile__button profile__edit-button profile__submit-button profile__submit-button_disabled'
            // className='profile__button profile__edit-button profile__submit-button'
            className='profile__button profile__edit-button'
            type='button'>
            Редактировать
          </button>
          <Link
            to='/'
            // className='profile__button profile__logout-button profile__logout-button_disabled'
            className='profile__button profile__logout-button'>
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Profile;
