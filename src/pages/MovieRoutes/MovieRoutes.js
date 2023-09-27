import { Route } from 'react-router-dom';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails.js';

import PropTypes from 'prop-types';

export function MovieRoutes({ id }) {
  return <Route key={id} path={`/:id/`} element={<MovieDetails />} />;
}

MovieRoutes.propTypes = {
  id: PropTypes.string.isRequired,
};
