import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

import myPhoto from '../../images/my_photo.jpg';
import linkIcon from '../../images/arrow.svg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me'>
      <SectionTitle title='Студент' />
      <div className='about-me__info'>
        <div className='about-me__text-container'>
          <div className='about-me__text'>
            <p className='about-me__name'>Дарья</p>
            <p className='about-me__basic-info'>Фронтенд-разработчик, 25&nbsp;лет</p>
            <p className='about-me__description'>
              Я&nbsp;родилась в&nbsp;Сибири, живу в&nbsp;Москве. По&nbsp;образованию
              лингвист-переводчик. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно
              начала кодить. После того, как прошла курс по&nbsp;веб-разработке, начала заниматься
              фриланс-заказами и&nbsp;ушла с&nbsp;постоянной работы.
            </p>
          </div>
          <div className='about-me__link-container'>
            <a
              className='about-me__link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/dashalalala24'>
              Github
            </a>
          </div>
        </div>
        <img
          className='about-me__img'
          src={myPhoto}
          alt='Моя фотография'
        />
      </div>
      <h3 className='about-me__subtitle'>Портфолио</h3>
      <div className='about-me__portfolio'>
        <ul className='about-me__portfolio-links'>
          <li className='about-me__portfolio-links-item'>
            <a
              className='about-me__portfolio-link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/dashalalala24/how-to-learn'>
              Статичный сайт
              <img
                className='about-me__link-icon'
                src={linkIcon}
                alt='Ссылка на проект'
              />
            </a>
          </li>
          <li className='about-me__portfolio-links-item'>
            <a
              className='about-me__portfolio-link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/dashalalala24/russian-travel'>
              Адаптивный сайт
              <img
                className='about-me__link-icon'
                src={linkIcon}
                alt='Ссылка на проект'
              />
            </a>
          </li>
          <li className='about-me__portfolio-links-item'>
            <a
              className='about-me__portfolio-link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/dashalalala24/react-mesto-api-full-gha'>
              Одностраничное приложение
              <img
                className='about-me__link-icon'
                src={linkIcon}
                alt='Ссылка на проект'
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
