import { MoviesListItem } from 'pages/MoviesListItem/MoviesListItem.js';
import { NavList } from './MoviesListStyles.js';

export const MoviesList = () => {
  return (
    <NavList>
      {JSON.parse(localStorage.getItem('response')).data.results.map(result =>
        MoviesListItem(result)
      )}
    </NavList>
  );
};
