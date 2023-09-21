import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const H1 = styled.h1`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: black;
`;

export const Nav = styled.nav`
  display: flex;
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

export const NavList = styled.nav`
  display: block;
  margin-top: 10px;
  margin-left: 20px;
  gap: 10px;
`;
