import { useState, useEffect } from 'react';
import { getMovies } from 'api/data_search.js';
import { Div, Ul, NavDetails, StyledLink } from './ReviewsStyles.js';
import { ReviewItem } from 'pages/ReviewItem/ReviewItem.js';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails.js';
import { nanoid } from 'nanoid';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
const back = nanoid();

export const Reviews = ({ filmId }) => {
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
      <NavDetails>
        <StyledLink key={back} to={`/:${filmId}`}>
          Back
        </StyledLink>
      </NavDetails>
      <Routes>
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
      <Ul>
        {!data.isLoading && data.films[0].map(review => ReviewItem(review))}
      </Ul>
    </Div>
  );
};
Reviews.propTypes = {
  filmId: PropTypes.string.isRequired,
};
