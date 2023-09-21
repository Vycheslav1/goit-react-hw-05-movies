import { nanoid } from 'nanoid';
import { Form, Input, Button, NavBack, StyledLink } from './MoviesStyles.js';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/data_search.js';
import { MoviesList } from 'pages/MoviesList/MoviesList.js';

const inputText = nanoid();
const back = nanoid();

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setLoading] = useState(false);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const handleSubmit = (e, value) => {
    e.preventDefault();

    setLoading(true);
  };
  useEffect(() => {
    if (!isLoading) {
      return;
    }
    getMovies(
      `https://api.themoviedb.org/3/search/movie?api_key=d0e55d9c3b81e26ea2922058fa861ca2&query=${searchParams.get(
        'query'
      )}`
    ).then(response => {
      setLoading(false);
      localStorage.setItem('link', JSON.stringify(searchParams.get('query')));
      localStorage.setItem('show', JSON.stringify(true));

      localStorage.setItem('response', JSON.stringify(response));
    });
  }, [isLoading, searchParams]);

  return (
    <div>
      <NavBack>
        <StyledLink key={back} to={backLink}>
          Back
        </StyledLink>
      </NavBack>
      <Form onSubmit={e => handleSubmit(e, e.target.value)}>
        <Input
          type="text"
          id={inputText}
          name="search"
          placeholder="Search"
          onChange={e => setSearchParams({ query: e.target.value })}
        />
        <Button type="submit">Search</Button>
      </Form>
      {!isLoading && JSON.parse(localStorage.getItem('show')) && <MoviesList />}
    </div>
  );
}
