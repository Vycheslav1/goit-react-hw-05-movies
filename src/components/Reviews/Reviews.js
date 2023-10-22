import { useState, useEffect } from 'react';
import { getMovies } from 'api/data_search.js';
import { Div, Ul } from './ReviewsStyles.js';
import { ReviewItem } from 'components/ReviewItem/ReviewItem.js';
import { NotFoundReviews } from 'components/NotFoundReviews/NotFoundReviews.js';

import PropTypes from 'prop-types';

export default function Reviews({ filmId }) {
  const [data, setData] = useState({
    films: [],
    isLoading: true,
  });
  useEffect(() => {
    getMovies(
      `/3/movie/${filmId}/reviews?api_key=d0e55d9c3b81e26ea2922058fa861ca2&language=en-US`
    ).then(response => {
      setData(prev => ({
        ...prev,
        films: [response.data.results],
        isLoading: false,
      }));
    });
  }, [data.films, filmId]);
  return (
    <Div>
      <Ul>
        {!data.isLoading && data.films[0].map(review => ReviewItem(review))}
        {!data.isLoading && !data.films[0].length && <NotFoundReviews />}
      </Ul>
    </Div>
  );
}
Reviews.propTypes = {
  filmId: PropTypes.string.isRequired,
};
