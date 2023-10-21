import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/data_search.js';
import { MoviesList } from 'components/MoviesList/MoviesList.js';
import { SearchForm } from 'components/SearchForm/SearchForm.js';

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState({
    films: [],
    isLoading: false,
  });

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setSearchParams({ query: value });
    setData(prev => ({
      ...prev,
      isLoading: true,
    }));
    localStorage.setItem('param', JSON.stringify(value));
  };
  localStorage.setItem('link', JSON.stringify(1));

  useEffect(() => {
    if (!data.isLoading && !JSON.parse(localStorage.getItem('flag'))) {
      return;
    }

    getMovies(
      `/3/search/movie?api_key=d0e55d9c3b81e26ea2922058fa861ca2&query=${JSON.parse(
        localStorage.getItem('param')
      )}`
    ).then(response => {
      setData(prev => ({
        ...prev,
        films: [...response.data.results],
        isLoading: false,
      }));
    });
  }, [data.isLoading, data.films]);

  return (
    <div>
      <SearchForm
        submitForm={handleSubmit}
        setParam={setSearchParams}
        search={searchParams}
      />
      {!data.isLoading && <MoviesList response={data.films} />}
    </div>
  );
}
