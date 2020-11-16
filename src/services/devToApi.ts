import axios from 'axios';

const devToApi = axios.create({
  baseURL: 'https://dev.to/api',
  timeout: 300000,
  timeoutErrorMessage: 'timeout',
});

export default devToApi;
