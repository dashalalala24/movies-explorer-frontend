import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <Routes>
      <Route
        path='/movies'
        element={
          <footer className='footer'>
            <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
              <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
              <nav className='footer__nav'>
                <ul className='footer__nav-list'>
                  <li className='footer__nav-list-item'>
                    <a
                      className='footer__link'
                      target='_blank'
                      rel='noreferrer'
                      href='https://practicum.yandex.ru'>
                      Яндекс.Практикум
                    </a>
                  </li>
                  <li className='footer__nav-lis-item'>
                    <a
                      className='footer__link'
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/dashalalala24'>
                      Github
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        }
      />
      <Route
        path='/saved-movies'
        element={
          <footer className='footer'>
            <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
              <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
              <nav className='footer__nav'>
                <ul className='footer__nav-list'>
                  <li className='footer__nav-list-item'>
                    <a
                      className='footer__link'
                      target='_blank'
                      rel='noreferrer'
                      href='https://practicum.yandex.ru'>
                      Яндекс.Практикум
                    </a>
                  </li>
                  <li className='footer__nav-lis-item'>
                    <a
                      className='footer__link'
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/dashalalala24'>
                      Github
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        }
      />
      <Route
        path='/'
        element={
          <footer className='footer'>
            <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
              <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
              <nav className='footer__nav'>
                <ul className='footer__nav-list'>
                  <li className='footer__nav-list-item'>
                    <a
                      className='footer__link'
                      target='_blank'
                      rel='noreferrer'
                      href='https://practicum.yandex.ru'>
                      Яндекс.Практикум
                    </a>
                  </li>
                  <li className='footer__nav-lis-item'>
                    <a
                      className='footer__link'
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/dashalalala24'>
                      Github
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        }
      />
      <Route
        path='*'
        element={null}
      />
    </Routes>
  );
}

export default Footer;
