import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem.js';

import { NavList } from './MoviesListStyles.js';

export const MoviesList = response => {
  return (
    <NavList>{response.response.map(result => MoviesListItem(result))}</NavList>
  );
};
