import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: rgba(244, 122, 0, 0.8);
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <StyledLink className={css.link} to="/register">
        Sign Up
      </StyledLink>
      <StyledLink className={css.link} to="/login">
        Sign In
      </StyledLink>
    </div>
  );
};
