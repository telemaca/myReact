import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = ({ children }) => {
  return <FlexContainer>{children}</FlexContainer>;
};

export default Container;
