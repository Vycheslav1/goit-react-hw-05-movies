import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
async function getMovies(url) {
  const response = await axios.get(url);

  return response;
}
export { getMovies };
