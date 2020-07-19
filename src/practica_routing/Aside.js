import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  &.selected {
    color: red;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Aside = () => {
  return (
    <aside>
      <StyledList>
        <li>
          <StyledNavLink to="/" exact activeClassName="selected">
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/sociedad" activeClassName="selected">
            Sociedad
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/politica" activeClassName="selected">
            Política
          </StyledNavLink>
          <StyledList>
            <li>
              <StyledNavLink to="/politica/nacional" activeClassName="selected">
                Nacional
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="/politica/internacional"
                activeClassName="selected"
              >
                Internacional
              </StyledNavLink>
            </li>
          </StyledList>
        </li>
        <li>
          <StyledNavLink to="/cultura" activeClassName="selected">
            Cultura
          </StyledNavLink>
          <StyledList>
            <li>
              <StyledNavLink to="/cultura/cine" activeClassName="selected">
                Cine
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/cultura/musica" activeClassName="selected">
                Música
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/cultura/teatro" activeClassName="selected">
                Teatro
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/cultura/museos" activeClassName="selected">
                Museos
              </StyledNavLink>
            </li>
          </StyledList>
        </li>
        <li>
          <StyledNavLink to="/ciencia" activeClassName="selected">
            Ciencia
          </StyledNavLink>
          <StyledList>
            <li>
              <StyledNavLink to="/ciencia/fisica" activeClassName="selected">
                Física
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="/ciencia/astronomia"
                activeClassName="selected"
              >
                Astronomía
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/ciencia/medicina" activeClassName="selected">
                Medicina
              </StyledNavLink>
            </li>
          </StyledList>
        </li>
        <li>
          <StyledNavLink to="/deportes" activeClassName="selected">
            Deportes
          </StyledNavLink>
        </li>
      </StyledList>
    </aside>
  );
};

export default Aside;
