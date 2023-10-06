import { useState, useEffect } from 'react';

import { getMovies } from 'api/data_search.js';

import { Div, H1 } from 'pages/Home/HomeStyles.js';

import { MoviesList } from 'components/MoviesList/MoviesList.js';

export default function Home() {
  const [data, setData] = useState({
    films: [],
    isLoading: true,
  });
  localStorage.setItem('link', JSON.stringify(0));
  localStorage.setItem('flag', JSON.stringify(false));
  useEffect(() => {
    getMovies(
      '/3/trending/all/day?api_key=d0e55d9c3b81e26ea2922058fa861ca2&language=en-US&include_adult=false&page=1'
    ).then(response => {
      setData(prev => ({
        ...prev,
        films: [...response.data.results],
        isLoading: false,
      }));
    });
  }, [data.films]);

  return (
    <Div>
      <H1>Trending today</H1>
      {!data.isLoading && <MoviesList response={data.films} />}
    </Div>
  );
}
