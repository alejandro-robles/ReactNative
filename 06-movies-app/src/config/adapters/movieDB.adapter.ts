import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: 'f7918a8e9f0abc2ebf4f18ba417255d5',
    language: 'es',
  },
});
