import axios from 'axios';

import { API_HOST } from './util';

export const getData = (path) => {
  return {
    method: 'GET',
    url: path,
    headers: {}
  };
};

export const login = async (path, user) => {
  return await axios.post(`${API_HOST}${path}`, user);
};
export const postData = (path, payload) => {
  return {
    method: 'POST',
    url: path,
    headers: {
      'Content-Type': 'application/json'
    },
    data: payload
  };
};

export const putData = (path, payload) => {
  return {
    method: 'PUT',
    url: `${path}/${payload.id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: payload
  };
};

export const removeData = (path, payload) => {
  return {
    method: 'DELETE',
    url: `${path}/${payload}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
