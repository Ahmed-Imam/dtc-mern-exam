import axios from 'axios';
import {getLocalStorage} from '../utils/localStorage'
const API_ROOT = 'http://localhost:5000/api'

const createApi = () => {
  let api, headers;
  const token = getLocalStorage('token')
  headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Cache-Control': 'no-store, no-cache',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  console.log('API_ROOT', API_ROOT);
  api = axios.create({
    baseURL: API_ROOT,
    responseType: 'json',
    headers: headers,
  });

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      // handle unauthorized requests
      const {status} = error.response;
      if (status === 401 || status === 403) {
       console.log('Error ', error)
      }
      return Promise.reject(error);
    },
  );
  return api;
};

const handleErrors = async (error) => {
  let result = {};
  const data = error && error.response && error.response.data;
  const status = error && error.response && error.response.status;

  result = {
    status: status,
    data: data,
    error: true,
  };
  return result;
};

const handleResponse = (res) => {
  return res && res.data;
};

const requests = {
  get: (url) =>
    createApi()
      .get(`${API_ROOT}${url}`)
      .then(handleResponse)
      .catch(handleErrors),
  post: (url, data) =>
    createApi()
      .post(`${API_ROOT}${url}`, data)
      .then(handleResponse)
      .catch(handleErrors),
  put: (url, data) =>
    createApi()
      .put(`${API_ROOT}${url}`, data)
      .then(handleResponse)
      .catch(handleErrors),
  delete: (url) =>
    createApi()
      .delete(`${API_ROOT}${url}`)
      .then(handleResponse)
      .catch(handleErrors),
};

// Auth
const Auth = {
  login: (data) =>
    requests.post( `/login`, data),
  registerUser: (data) =>
    requests.post(`/register`, data),
};

// User
const User = {
  getUsers: (page, pageSize) => requests.get(`/getUsers/${page}/${pageSize}`),
  searchUser: (name) => requests.put('/api/v1/user', name),
};



export default {
  Auth,
  User,
};
