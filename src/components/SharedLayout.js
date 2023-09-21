import { Outlet } from 'react-router-dom';

import { StyledLink, Nav, Div } from './SharedLayoutStyles.js';

export default function SharedLayout() {
  return (
    <Div>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>

      <Outlet />
    </Div>
  );
}
