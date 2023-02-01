import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: rgb(0, 176, 182);
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
