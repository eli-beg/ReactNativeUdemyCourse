import axios from 'axios';
import Config from 'react-native-config';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: Config.API_KEY,
    language: 'es-ES',
  },
});

export default movieDB;
