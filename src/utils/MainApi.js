import { MAIN_API_URL } from './constants';

// TODO отрефакторить

class MainApi {
  constructor(data) {
    this._serverURL = data.serverURL;
    this._headers = data.headers;
    this._credentials = data.credentials;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  register(name, email, password) {
    return fetch(`${this._serverURL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkRes);
  }

  login(email, password) {
    return fetch(`${this._serverURL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(this._checkRes);
  }

  getUserInfo(token) {
    return fetch(`${this._serverURL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }

  setUserInfo(data) {
    return fetch(`${this._serverURL}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkRes);
  }

  getSavedMovies() {
    return fetch(`${this._serverURL}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(this._checkRes);
  }

  saveMovie(data) {
    return fetch(`${this._serverURL}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(data),
    }).then(this._checkRes);
  }

  deleteMovie(movieId) {
    return fetch(`${this._serverURL}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(this._checkRes);
  }
}

const apiConfig = {
  serverURL: MAIN_API_URL,
};

const mainApi = new MainApi(apiConfig);

export default mainApi;
