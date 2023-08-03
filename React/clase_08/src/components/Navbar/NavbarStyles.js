import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & img {
    width: 30px;
  }
`;

export const LinkContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

//SPOILER!!!!!!
export const NavLinkStyled = styled(NavLink)`
  color: white;
  &.active {
    color: steelblue
  }
`;
