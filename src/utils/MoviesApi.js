import { MOVIES_API_URL } from './constants';

// TODO отрефакторить, вынести проверку ответа в утилс, конфиг в константы

class MoviesApi {
  constructor(data) {
    this._serverURL = data.serverURL;
    this._headers = data.headers;
  }

  getMovies() {
    return fetch(`${this._serverURL}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkRes);
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка в MoviesApi ${res.status} ${res.statusText}`);
    }
  }
}

const apiConfig = {
  serverURL: MOVIES_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const moviesApi = new MoviesApi(apiConfig);

export default moviesApi;
