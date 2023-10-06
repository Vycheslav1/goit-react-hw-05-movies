import { useState, useEffect } from 'react';
import { Div, Ul } from './CastStyles';
import { CastItem } from 'components/CastItem/CastItem.js';

import { getMovies } from 'api/data_search.js';
import { NotFoundCast } from 'components/NotFoundCast/NotFoundCast.js';

import PropTypes from 'prop-types';

export default function Cast({ filmId }) {
  const [data, setData] = useState({
    films: [],
    isLoading: true,
  });
  useEffect(() => {
    getMovies(
      `/3/movie/${filmId}/credits?api_key=d0e55d9c3b81e26ea2922058fa861ca2&language=en-US`
    ).then(response => {
      setData(prev => ({
        ...prev,
        films: [response.data.cast],
        isLoading: false,
      }));
    });
  }, [data.films, filmId]);
  return (
    <Div>
      <Ul>
        {!data.isLoading && data.films[0].map(cast => CastItem(cast))}
        {!data.isLoading && !data.films[0].length && <NotFoundCast />}
      </Ul>
    </Div>
  );
}
Cast.propTypes = {
  filmId: PropTypes.string.isRequired,
};
