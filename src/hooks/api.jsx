import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './auth';

export const api = axios.create({
  baseURL: 'https://food-explorer-api-pemm.onrender.com'
});

const ApiProvider = ({ children }) => {
  const { signOut } = useAuth();

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      error => {
        const sessionExpired = error.response.data.message === 'JWT Token inválido' || error.response.data.message === 'JWT Token não informado';

        if (sessionExpired && error.response && error.response.status === 401) {
          alert('Sua sessão expirou. Faça login novamente.');
          signOut();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [signOut]);

  return children;
};

export default ApiProvider;
