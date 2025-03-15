import axios from 'axios';

import { API_HOST, getHeaders } from './util';

export const getData = async (path) => {
  const response = await axios.get(`${API_HOST}${path}`, getHeaders());
  return response.data;
};

export const login = async (path, user) => {
  return await axios.post(`${API_HOST}${path}`, user);
};
export const postData = async (path, item) => {
  return await axios.post(`${API_HOST}${path}`, item, getHeaders());
};

export const putData = async (path, item) => {
  return await axios.put(`${API_HOST}${path}`, item, getHeaders());
};

export const removeData = async (path) => {
  return await axios.delete(`${API_HOST}${path}`, getHeaders());
};
