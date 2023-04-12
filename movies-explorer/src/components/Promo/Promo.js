import React from 'react';

import './Promo.css';
import promoImage from '../../images/main_promo.svg';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <img
        className='promo__img'
        src={promoImage}
        alt='Узор'
      />
    </section>
  );
}

export default Promo;
