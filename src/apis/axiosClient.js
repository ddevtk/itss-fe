import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/apis/',
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    console.log('fljasljf');

    const token = window.localStorage.getItem('token');
    console.log(token);
    if (token) {
      config.headers['authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    throw error;
  },
);

export default axiosClient;
