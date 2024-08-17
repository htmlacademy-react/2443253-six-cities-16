import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../const';
import { getToken } from './token';

type DetailMessageType = {
  type: string;
  message: string;
}

export const enum RequestStatus {
	Idle = 'idle',
	Loading = 'loading',
	Success = 'success',
	Failed = 'failed',
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if(error.response) {
        const errorMessage = error.response.data;
        // eslint-disable-next-line no-console
        console.log('Ошибка сервера: ', errorMessage);

      }
    }
  );

  return api;
};
