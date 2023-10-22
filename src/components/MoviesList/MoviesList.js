import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem.js';

import { NavList } from './MoviesListStyles.js';

export default function MoviesList(response) {
  return (
    <NavList>{response.response.map(result => MoviesListItem(result))}</NavList>
  );
}
