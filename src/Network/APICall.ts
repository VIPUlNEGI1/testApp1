import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import axios from 'axios';
import AppStorage, { AppStorageKeys } from '@/Helpers/AppStorage';
import Config from '@/Config/Config';

type Methodtype = 'post' | 'get' | 'put' | 'delete';

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 120000,
});
console.log('Config.BASE_URL', Config.BASE_URL);
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = AppStorage.getString(AppStorageKeys.TOKEN);

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;
    }

    if (__DEV__) {
      console.log('--- API Request ---');
      console.log(`Method: ${config.method?.toUpperCase()}`);
      console.log(`URL: ${config.baseURL}${config.url}`);
      if (token) {
        console.log('Auth: Bearer Token present');
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

const APICall = <T>(
  method: Methodtype,
  body: any,
  url: string | null = null,
  headers: any = {},
  formData = false,
) => {
  if (!Config.BASE_URL) {
    return Promise.resolve({
      status: 500,
      data: { message: 'API Base URL is not configured.' },
    } as any);
  }

  const config: AxiosRequestConfig = {
    method,
  };

  if (url) {
    config.url = url;
  }

  if (method === 'get' && body) {
    config.params = body;
  } else if ((method === 'post' || method === 'put') && body) {
    config.data = body;
  }

  if (headers) {
    config.headers = {
      ...config.headers,
      ...headers,
    };
  }

  return new Promise<{ status: number; data: T }>((resolve) => {
    axiosInstance(config)
      .then((res) => {
        if (__DEV__) {
          console.log('--- API Success ---', res.status, url);
          console.log('Response Data:', JSON.stringify(res.data, null, 2));
        }
        return resolve({ status: res.status, data: res.data });
      })
      .catch((error) => {
        if (__DEV__) {
          console.error('--- API Error ---');
          console.error('URL:', url);
          if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
          } else {
            console.error('Message:', error.message);
          }
          console.error('-----------------');
        }

        return resolve(
          error?.response || {
            status: error.code === 'ECONNABORTED' ? 408 : 500,
            data: { message: error.message || 'Network Error' },
          },
        );
      });
  });
};

export default APICall;
