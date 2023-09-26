import { useState, useEffect } from 'react';

import { getMovies } from 'api/data_search.js';

import { Div, H1 } from 'pages/Home/HomeStyles.js';

import { MoviesList } from 'pages/MoviesList/MoviesList.js';

import { NotFound } from 'pages/NotFound/NotFound';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  localStorage.setItem('show', JSON.stringify(false));

  useEffect(() => {
    getMovies(
      `/3/trending/all/day?api_key=d0e55d9c3b81e26ea2922058fa861ca2&language=en-US&include_adult=false&page=1`
    ).then(response => {
      setLoading(false);
      localStorage.setItem('response', JSON.stringify(response));
    });
  }, [isLoading]);

  return (
    <Div>
      {!JSON.parse(localStorage.getItem('response')) && <NotFound />}
      <H1>Trending today</H1>
      {!isLoading && <MoviesList />}
    </Div>
  );
}
