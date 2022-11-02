import axios from 'axios';

const createAxiosInstance = (baseURL: string) =>
  axios.create({
    baseURL,
    timeout: 1000 * 10,
  });

export default createAxiosInstance;
