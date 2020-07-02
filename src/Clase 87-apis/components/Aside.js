import React from "react";
import styled from "styled-components";
import Filters from "./Filters";

const StyledAside = styled.aside`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;
`;

const Aside = () => {
  return (
    <StyledAside>
      <Filters />
    </StyledAside>
  );
};

export default Aside;
