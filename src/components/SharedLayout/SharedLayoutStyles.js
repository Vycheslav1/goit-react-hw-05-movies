import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  padding-left: 20px;
  padding-top: 15px;
  width: 100%;
  height: 60px;
  border: 2px solid blue;

  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  color: black;
`;
