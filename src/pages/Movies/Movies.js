import { nanoid } from 'nanoid';

import { NavBack, StyledLink } from './MoviesStyles.js';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/data_search.js';
import { MoviesList } from 'components/MoviesList/MoviesList.js';
import { SearchForm } from 'components/SearchForm/SearchForm.js';
const back = nanoid();

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState({
    films: [],
    isLoading: false,
  });
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const handleSubmit = (e, value) => {
    e.preventDefault();

    setData(prev => ({
      ...prev,
      isLoading: true,
    }));
  };

  useEffect(() => {
    if (!data.isLoading) {
      return;
    }

    getMovies(
      `/3/search/movie?api_key=d0e55d9c3b81e26ea2922058fa861ca2&query=${searchParams.get(
        'query'
      )}`
    ).then(response => {
      setData(prev => ({
        ...prev,
        films: [...response.data.results],
        isLoading: false,
      }));
    });
  }, [data.isLoading, searchParams]);

  return (
    <div>
      <NavBack>
        <StyledLink key={back} to={backLink}>
          Back
        </StyledLink>
      </NavBack>
      <SearchForm submitForm={handleSubmit} setParam={setSearchParams} />
      {!data.isLoading && JSON.parse(localStorage.getItem('show')) && (
        <MoviesList response={data.films} />
      )}
    </div>
  );
}
