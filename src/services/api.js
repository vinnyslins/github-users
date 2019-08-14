import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com'
});

export const getUsers = () => {
  return api.get('/users');
};

export const getUserById = username => {
  return api.get(`/users/${username}`);
}
