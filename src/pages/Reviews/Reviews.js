import { Div, Ul, NavDetails, StyledLink } from './ReviewsStyles.js';
import { ReviewItem } from 'pages/ReviewItem/ReviewItem.js';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails.js';
import { nanoid } from 'nanoid';
import { Routes, Route } from 'react-router-dom';

const back = nanoid();

export const Reviews = () => (
  <Div>
    <NavDetails>
      <StyledLink
        key={back}
        to={`/:${JSON.parse(localStorage.getItem('reviews')).data.id}`}
      >
        Back
      </StyledLink>
    </NavDetails>
    <Routes>
      <Route path="/:id" element={<MovieDetails />} />
    </Routes>
    <Ul>
      {JSON.parse(localStorage.getItem('reviews')).data.results.map(review =>
        ReviewItem(review)
      )}
    </Ul>
  </Div>
);
