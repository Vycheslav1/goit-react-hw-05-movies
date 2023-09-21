import axios from 'axios';

async function getMovies(url) {
  const response = await axios.get(url);

  return response;
}
export { getMovies };
