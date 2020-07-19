import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNAv = styled.aside``;

const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  &.selected {
    color: red;
    font-weight: bold;
  }
`;
const Nav = () => {
  return (
    <StyledNAv>
      {/* <StyledNavLink exact activeClassName="selected" to="/">
        Home
      </StyledNavLink> */}
      <StyledNavLink exact activeClassName="selected" to="/characters">
        Characters
      </StyledNavLink>
      <StyledNavLink exact activeClassName="selected" to="/episodes">
        Episodes
      </StyledNavLink>
      <StyledNavLink exact activeClassName="selected" to="/locations">
        Locations
      </StyledNavLink>
    </StyledNAv>
  );
};

export default Nav;

{
  /* <div>
      <StyledNavLink exact activeClassName='selected' to='/'>
        Home
      </StyledNavLink>
      <StyledNavLink exact activeClassName='selected' to='/categories'>
        Categories
      </StyledNavLink>
      <StyledNavLink
        exact
        activeClassName='selected'
        to='/products?price=500&category=celulares'
      >
        Products
      </StyledNavLink>
      <StyledNavLink exact activeClassName='selected' to='/login'>
        Login
      </StyledNavLink>
      <StyledNavLink exact activeClassName='selected' to='/account'>
        My account
      </StyledNavLink>
    </div> */
}
