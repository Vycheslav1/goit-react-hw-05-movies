import { StyledLink } from './MoviesListItemStyles.js';

import PropTypes from 'prop-types';

export const MoviesListItem = ({ id, name, title }) => {
  return (
    <StyledLink key={id} to={`/:${id}`}>
      {name ? name : title}
    </StyledLink>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
