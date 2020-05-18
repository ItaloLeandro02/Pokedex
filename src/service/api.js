import axios from 'axios';
import { Alert } from 'react-native';

const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v1',
});

api.interceptors.response.use(
  response => response,
  err => {
    Alert.alert(err.message);

    return Promise.reject(err);
  }
);

export default api;
