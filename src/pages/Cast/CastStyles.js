import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  display: block;
  width: auto;
  height: auto;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-left: 40px;
  margin-top: 20px;
  gap: 40px;
`;

export const NavDetails = styled.nav`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  color: black;
`;
