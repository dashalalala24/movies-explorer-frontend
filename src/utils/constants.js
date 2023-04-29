const MAIN_API_URL = 'https://api.movies.dashalalala24.nomoredomains.monster';
// const MAIN_API_URL = 'http://localhost:3001';
const MOVIES_API_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const IMAGES_URL = 'https://api.nomoreparties.co';

const MOVIES_MESSAGE = {
  NOT_FOUND: 'Ничего не найдено',
  NO_SAVED_MOVIES: 'У вас пока нет сохранённых фильмов',
  NO_KEYWORD: 'Нужно ввести ключевое слово',
  SERVER_ERROR:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
};

const APP_MESSAGE = {
  DEFAULT_ERROR: 'Что-то пошло не так! Попробуйте ещё раз',
  CONFLICT: 'Пользователь с такой почтой уже зарегистрирован',
  LOGIN_FAILED: 'Неправильный логин и/или пароль',
  SUCCESS: 'Данные успешно изменены',
};

const MOVIES_NUMBER = {
  INITIAL: { MOBILE: 5, TABLET: 8, DESKTOP: 12 },
  TO_ADD: { MOBILE: 2, TABLET: 2, DESKTOP: 3 },
};

const VALIDATION = {
  name: {
    pattern: '^[\\sa-zA-Zа-яА-ЯёЁ-]+$',
    message: 'Имя может содержать только латиницу, кириллицу, пробел или дефис.',
  },
  email: {
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,8}(.[a-z{2,8}])?',
    // pattern: '^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$',
    // pattern: '[^s@]+@[^s@]+.[^s@]+',
    // pattern: '^(.)+@[A-Za-z0-9]([A-Za-z0-9.-]*[A-Za-z0-9])?.[A-Za-z]{1,13}$',
    // pattern: '\S+@\S+.\S+',
    message: 'Некорректный Email-адрес.',
  },
};

module.exports = {
  MAIN_API_URL,
  MOVIES_API_URL,
  IMAGES_URL,
  MOVIES_MESSAGE,
  APP_MESSAGE,
  MOVIES_NUMBER,
  VALIDATION,
};
