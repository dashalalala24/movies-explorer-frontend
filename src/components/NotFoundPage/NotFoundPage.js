import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1, { replace: true });
  }

  return (
    <main className='not-found-page'>
      <div className='not-found-page__text'>
        <p className='not-found-page__error'>404</p>
        <h1 className='not-found-page__title'>Страница не найдена</h1>
      </div>
      <button
        type='button'
        className='not-found-page__button'
        onClick={goBack}>
        Назад
      </button>
    </main>
  );
}

export default NotFoundPage;
