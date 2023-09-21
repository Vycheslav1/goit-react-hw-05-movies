import { Div, Ul, StyledLink, NavDetails } from './CastStyles';
import { CastItem } from 'pages/CastItem/CastItem.js';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails.js';
import { nanoid } from 'nanoid';
import { Routes, Route } from 'react-router-dom';

const back = nanoid();

export const Cast = () => {
  return (
    <Div>
      <NavDetails>
        <StyledLink
          key={back}
          to={`/:${JSON.parse(localStorage.getItem('cast')).data.id}`}
        >
          Back
        </StyledLink>
      </NavDetails>
      <Routes>
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
      <Ul>
        {JSON.parse(localStorage.getItem('cast')).data.cast.map(cast =>
          CastItem(cast)
        )}
      </Ul>
    </Div>
  );
};
