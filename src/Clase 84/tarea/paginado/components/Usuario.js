import React from "react";
import styled from "styled-components";

const StyledUser = styled.li`
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  font-family: "Helvetica";
  color: #fafafa;
  background-color: firebrick;
  border-radius: 10px;
  margin: 10px;
`;

const Usuario = (data) => {
  const { firstname, lastname, company, email } = data;
  return (
    <StyledUser style={{ display: "flex" }}>
      <h4>{firstname + " " + lastname}</h4>
      <p>Empresa: {company}</p>
      <p>{email}</p>
    </StyledUser>
  );
};

export default Usuario;
